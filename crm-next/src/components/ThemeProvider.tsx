'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider, MaterialDesignContent } from 'notistack';
import { styled } from '@mui/material/styles';

// Create styled MaterialDesignContent with custom styling
const StyledMaterialDesignContent = styled(MaterialDesignContent)(
  ({ theme }) => ({
    '&.notistack-MuiContent-success': {
      background:
        'linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 50%, #f9fbe7 100%) !important',
      color: '#1b5e20 !important',
      borderRadius: '16px !important',
      border: '1px solid rgba(76, 175, 80, 0.2) !important',
      fontWeight: '500 !important',
      fontSize: '0.875rem !important',
      boxShadow:
        '0 8px 32px rgba(76, 175, 80, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1) !important',
      backdropFilter: 'blur(20px) !important',
      minWidth: '280px !important',
      maxWidth: '320px !important',
      padding: '12px 16px !important',
      textShadow: 'none !important',
      transition: 'all 0.3s ease !important',
      position: 'relative !important',

      // Modern glass effect
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
        borderRadius: '16px',
        pointerEvents: 'none',
      },

      // Success icon styling
      '& .SnackbarContent-root': {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      },

      // Fade animation
      animation: 'modernFadeOut 7s ease-out forwards !important',
    },
    '&.notistack-MuiContent-error': {
      background:
        'linear-gradient(135deg, #ffebee 0%, #ffcdd2 50%, #ef9a9a 100%) !important',
      color: '#c62828 !important',
      borderRadius: '16px !important',
      border: '1px solid rgba(244, 67, 54, 0.2) !important',
      fontWeight: '500 !important',
      fontSize: '0.875rem !important',
      boxShadow:
        '0 8px 32px rgba(244, 67, 54, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1) !important',
      backdropFilter: 'blur(20px) !important',
      minWidth: '280px !important',
      maxWidth: '320px !important',
      padding: '12px 16px !important',
      textShadow: 'none !important',
      transition: 'all 0.3s ease !important',
      position: 'relative !important',

      // Modern glass effect
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
        borderRadius: '16px',
        pointerEvents: 'none',
      },
    },
  })
);

const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
      light: '#8b9cf7',
      dark: '#4c63d2',
    },
    secondary: {
      main: '#764ba2',
      light: '#9575cd',
      dark: '#5e35b1',
    },
    background: {
      default: '#fafbff',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a202c',
      secondary: '#4a5568',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        autoHideDuration={7000}
        dense
        preventDuplicate
        Components={{
          success: StyledMaterialDesignContent,
          error: StyledMaterialDesignContent,
        }}
        style={{
          position: 'fixed',
          top: '60px',

          zIndex: 9999,
        }}
      >
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  );
}
