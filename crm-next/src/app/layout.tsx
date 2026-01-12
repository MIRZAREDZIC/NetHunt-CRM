import { Inter } from 'next/font/google';
import { ThemeProvider, QueryProvider, ErrorBoundary } from '@/components';
import { Box } from '@mui/material';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'CRM System',
  description: 'Professional CRM System for Business Management',
  keywords: 'CRM, Customer Relationship Management, Business, Sales',
  authors: [{ name: 'CRM Team' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <ErrorBoundary>
          <QueryProvider>
            <ThemeProvider>
              <Box
                component="main"
                sx={{
                  minHeight: '100vh',
                  bgcolor: 'background.default',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {children}
              </Box>
            </ThemeProvider>
          </QueryProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
