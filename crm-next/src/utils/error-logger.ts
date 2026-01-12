interface ErrorContext {
  userId?: string;
  userAgent?: string;
  url?: string;
  timestamp?: string;
  component?: string;
  action?: string;
  extra?: Record<string, any>;
}

interface ErrorLog {
  message: string;
  stack?: string;
  level: 'error' | 'warning' | 'info';
  context?: ErrorContext;
}

class ErrorLogger {
  private static instance: ErrorLogger;
  private logs: ErrorLog[] = [];
  private maxLogs = 100;

  private constructor() {}

  static getInstance(): ErrorLogger {
    if (!ErrorLogger.instance) {
      ErrorLogger.instance = new ErrorLogger();
    }
    return ErrorLogger.instance;
  }

  private getContext(): ErrorContext {
    return {
      userAgent:
        typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      timestamp: new Date().toISOString(),
    };
  }

  log(
    error: Error | string,
    level: 'error' | 'warning' | 'info' = 'error',
    context?: Partial<ErrorContext>
  ) {
    const errorMessage = error instanceof Error ? error.message : error;
    const errorStack = error instanceof Error ? error.stack : undefined;

    const errorLog: ErrorLog = {
      message: errorMessage,
      stack: errorStack,
      level,
      context: {
        ...this.getContext(),
        ...context,
      },
    };

    // Add to local logs
    this.logs.unshift(errorLog);
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(0, this.maxLogs);
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      const logMethod =
        level === 'error'
          ? console.error
          : level === 'warning'
            ? console.warn
            : console.info;
      logMethod(`[${level.toUpperCase()}]`, errorMessage, errorLog.context);
      if (errorStack) {
        console.error('Stack trace:', errorStack);
      }
    }

    // Send to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToExternalService(errorLog);
    }
  }

  private async sendToExternalService(errorLog: ErrorLog) {
    try {
      // Example: Send to your error tracking service
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorLog),
      // });

      // For now, just store in localStorage as fallback
      if (typeof window !== 'undefined') {
        const existingLogs = JSON.parse(
          localStorage.getItem('error_logs') || '[]'
        );
        existingLogs.unshift(errorLog);
        localStorage.setItem(
          'error_logs',
          JSON.stringify(existingLogs.slice(0, 50))
        );
      }
    } catch (err) {
      console.error('Failed to send error log to external service:', err);
    }
  }

  error(error: Error | string, context?: Partial<ErrorContext>) {
    this.log(error, 'error', context);
  }

  warning(message: string, context?: Partial<ErrorContext>) {
    this.log(message, 'warning', context);
  }

  info(message: string, context?: Partial<ErrorContext>) {
    this.log(message, 'info', context);
  }

  getLogs(): ErrorLog[] {
    return [...this.logs];
  }

  clearLogs() {
    this.logs = [];
    if (typeof window !== 'undefined') {
      localStorage.removeItem('error_logs');
    }
  }

  // API Error specific logging
  logApiError(error: any, endpoint: string, method: string = 'GET') {
    const context: Partial<ErrorContext> = {
      component: 'API',
      action: `${method} ${endpoint}`,
      extra: {
        status: error.status,
        statusText: error.statusText,
        endpoint,
        method,
      },
    };

    this.error(error.message || 'API request failed', context);
  }

  // Form Error specific logging
  logFormError(error: any, formName: string, fieldName?: string) {
    const context: Partial<ErrorContext> = {
      component: 'Form',
      action: `${formName}${fieldName ? ` - ${fieldName}` : ''}`,
      extra: {
        formName,
        fieldName,
      },
    };

    this.error(error.message || 'Form validation failed', context);
  }

  // Component Error specific logging
  logComponentError(error: any, componentName: string, action?: string) {
    const context: Partial<ErrorContext> = {
      component: componentName,
      action,
    };

    this.error(error.message || 'Component error', context);
  }
}

// Export singleton instance
export const errorLogger = ErrorLogger.getInstance();

// Export types for use in other files
export type { ErrorContext, ErrorLog };
