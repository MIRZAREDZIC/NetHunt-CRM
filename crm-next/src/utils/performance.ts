interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  type: 'navigation' | 'resource' | 'measure' | 'custom';
  metadata?: Record<string, any>;
}

class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetric[] = [];
  private observers: PerformanceObserver[] = [];
  private isEnabled: boolean;

  private constructor() {
    // Enable in both development and production, but with different verbosity
    this.isEnabled = true; // Always enabled for monitoring

    if (this.isEnabled) {
      this.initializeObservers();
    }
  }

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private initializeObservers() {
    if (typeof window === 'undefined' || !window.PerformanceObserver) {
      return;
    }

    try {
      // Observe navigation timing - only log if significant
      const navObserver = new PerformanceObserver(list => {
        list.getEntries().forEach(entry => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const loadTime = navEntry.loadEventEnd - navEntry.fetchStart;

            // Only record if load time is significant or problematic
            if (loadTime > 100) {
              this.recordMetric('page-load', loadTime, 'navigation', {
                domContentLoaded:
                  navEntry.domContentLoadedEventEnd - navEntry.fetchStart,
                firstPaint: this.getFirstPaint(),
                firstContentfulPaint: this.getFirstContentfulPaint(),
                isSlowLoad: loadTime > 1000,
              });
            }
          }
        });
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);

      // Observe resource timing - only for large resources
      const resourceObserver = new PerformanceObserver(list => {
        list.getEntries().forEach(entry => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            const loadTime =
              resourceEntry.responseEnd - resourceEntry.requestStart;

            // Only log slow resources (>200ms) or large files
            if (loadTime > 200 || resourceEntry.transferSize > 100000) {
              this.recordMetric(
                `resource-${resourceEntry.name.split('/').pop()}`,
                loadTime,
                'resource',
                {
                  size: resourceEntry.transferSize,
                  type: resourceEntry.initiatorType,
                  url: resourceEntry.name,
                  isSlow: loadTime > 500,
                }
              );
            }
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);

      // Observe largest contentful paint - only critical metrics
      const lcpObserver = new PerformanceObserver(list => {
        list.getEntries().forEach(entry => {
          if (entry.startTime > 2500) {
            // Only log if problematic
            this.recordMetric(
              'largest-contentful-paint',
              entry.startTime,
              'measure',
              {
                isGood: entry.startTime < 2500,
                needsImprovement:
                  entry.startTime >= 2500 && entry.startTime < 4000,
                isPoor: entry.startTime >= 4000,
              }
            );
          }
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);

      // Observe cumulative layout shift - only if problematic
      const clsObserver = new PerformanceObserver(list => {
        let clsValue = 0;
        list.getEntries().forEach(entry => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });

        // Only log if CLS is problematic
        if (clsValue > 0.1) {
          this.recordMetric('cumulative-layout-shift', clsValue, 'measure', {
            isGood: clsValue < 0.1,
            needsImprovement: clsValue >= 0.1 && clsValue < 0.25,
            isPoor: clsValue >= 0.25,
          });
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (error) {
      console.warn('Performance monitoring setup failed:', error);
    }
  }

  private getFirstPaint(): number | undefined {
    const paintEntries = performance.getEntriesByType('paint');
    const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
    return firstPaint?.startTime;
  }

  private getFirstContentfulPaint(): number | undefined {
    const paintEntries = performance.getEntriesByType('paint');
    const fcp = paintEntries.find(
      entry => entry.name === 'first-contentful-paint'
    );
    return fcp?.startTime;
  }

  recordMetric(
    name: string,
    value: number,
    type: PerformanceMetric['type'] = 'custom',
    metadata?: Record<string, any>
  ) {
    if (!this.isEnabled) return;

    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: Date.now(),
      type,
      metadata,
    };

    this.metrics.push(metric);

    // Keep only last 20 metrics to reduce memory usage
    if (this.metrics.length > 20) {
      this.metrics = this.metrics.slice(-20);
    }

    // Send to analytics in production only
    if (process.env.NODE_ENV === 'production') {
      this.sendToAnalytics(metric);
    }
  }

  private async sendToAnalytics(metric: PerformanceMetric) {
    try {
      // Only send critical metrics to reduce noise
      const isCritical =
        metric.name === 'page-load' ||
        metric.name === 'largest-contentful-paint' ||
        metric.name === 'cumulative-layout-shift' ||
        metric.name.includes('api-');

      if (!isCritical) return;

      // Store in localStorage for now
      if (typeof window !== 'undefined') {
        const existingMetrics = JSON.parse(
          localStorage.getItem('performance_metrics') || '[]'
        );
        existingMetrics.push(metric);
        localStorage.setItem(
          'performance_metrics',
          JSON.stringify(existingMetrics.slice(-10))
        );
      }
    } catch (error) {
      // Silently fail to avoid console noise
    }
  }

  // Measure function execution time - only if enabled
  measureFunction<T>(name: string, fn: () => T): T {
    if (!this.isEnabled) return fn();

    const start = performance.now();
    const result = fn();
    const end = performance.now();
    const duration = end - start;

    // Only record if significant
    if (duration > 10) {
      this.recordMetric(`function-${name}`, duration, 'measure');
    }
    return result;
  }

  // Measure async function execution time - only if enabled
  async measureAsyncFunction<T>(
    name: string,
    fn: () => Promise<T>
  ): Promise<T> {
    if (!this.isEnabled) return fn();

    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    const duration = end - start;

    // Only record if significant
    if (duration > 50) {
      this.recordMetric(`async-function-${name}`, duration, 'measure');
    }
    return result;
  }

  // Start a custom timer - only if enabled
  startTimer(name: string): () => void {
    if (!this.isEnabled) return () => {};

    const start = performance.now();
    return () => {
      const end = performance.now();
      const duration = end - start;

      // Only record if significant
      if (duration > 5) {
        this.recordMetric(`timer-${name}`, duration, 'measure');
      }
    };
  }

  // Get all metrics
  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  // Get metrics by type
  getMetricsByType(type: PerformanceMetric['type']): PerformanceMetric[] {
    return this.metrics.filter(metric => metric.type === type);
  }

  // Get average for a metric name
  getAverageMetric(name: string): number | null {
    const matchingMetrics = this.metrics.filter(metric => metric.name === name);
    if (matchingMetrics.length === 0) return null;

    const sum = matchingMetrics.reduce((acc, metric) => acc + metric.value, 0);
    return sum / matchingMetrics.length;
  }

  // Get performance summary
  getPerformanceSummary() {
    const pageLoad = this.getAverageMetric('page-load');
    const lcp = this.getAverageMetric('largest-contentful-paint');
    const cls = this.getAverageMetric('cumulative-layout-shift');

    return {
      pageLoad: pageLoad ? `${pageLoad.toFixed(0)}ms` : 'N/A',
      lcp: lcp ? `${lcp.toFixed(0)}ms` : 'N/A',
      cls: cls ? cls.toFixed(3) : 'N/A',
      grade: this.getPerformanceGrade(pageLoad, lcp, cls),
    };
  }

  private getPerformanceGrade(
    pageLoad?: number | null,
    lcp?: number | null,
    cls?: number | null
  ): string {
    let score = 0;
    let total = 0;

    if (pageLoad) {
      total++;
      if (pageLoad < 500) score += 3;
      else if (pageLoad < 1000) score += 2;
      else if (pageLoad < 2000) score += 1;
    }

    if (lcp) {
      total++;
      if (lcp < 2500) score += 3;
      else if (lcp < 4000) score += 2;
      else score += 1;
    }

    if (cls) {
      total++;
      if (cls < 0.1) score += 3;
      else if (cls < 0.25) score += 2;
      else score += 1;
    }

    if (total === 0) return 'N/A';

    const average = score / total;
    if (average >= 2.5) return 'A';
    if (average >= 2) return 'B';
    if (average >= 1.5) return 'C';
    return 'D';
  }

  // Clear all metrics
  clearMetrics() {
    this.metrics = [];
    if (typeof window !== 'undefined') {
      localStorage.removeItem('performance_metrics');
    }
  }

  // Cleanup observers
  cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }

  // Enable/disable monitoring
  setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
    if (!enabled) {
      this.cleanup();
    } else if (this.observers.length === 0) {
      this.initializeObservers();
    }
  }
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();

// Export types
export type { PerformanceMetric };

// Utility functions for common measurements - optimized for production only
export const measureComponentRender = (componentName: string) => {
  if (process.env.NODE_ENV !== 'production') return () => {}; // No-op in development
  return performanceMonitor.startTimer(`component-render-${componentName}`);
};

export const measurePageLoad = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navigation.loadEventEnd - navigation.fetchStart;
    
    return loadTime;
  }
  return 0;
};

export const measureApiCall = async <T>(
  apiName: string,
  apiCall: () => Promise<T>
): Promise<T> => {
  const startTime = performance.now();
  
  try {
    const result = await apiCall();
    const duration = performance.now() - startTime;
    
    return result;
  } catch (error) {
    const duration = performance.now() - startTime;
    throw error;
  }
};

// Performance summary for debugging
export const getPerformanceSummary = () => {
  return performanceMonitor.getPerformanceSummary();
};
