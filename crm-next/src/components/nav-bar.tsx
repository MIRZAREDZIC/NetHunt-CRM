'use client';

import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { RocketLaunch as RocketLaunchIcon, ShoppingCart as BuyerIcon, Business as SupplierIcon } from '@mui/icons-material';
import { useCallback } from 'react';
import { useDialogContext } from '@/app/(app)/layout';

export default function NavBar() {
  const { openBuyerDialog, openSupplierDialog } = useDialogContext();

  const handleGetStarted = useCallback(() => {
    // Scroll to CTA section at the bottom
    const element = document.getElementById('cta-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleScrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: theme => theme.zIndex.drawer + 1,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
      }}
    >
      <Toolbar sx={{ minHeight: '70px', px: 3 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mr: 2,
            cursor: 'pointer',
            '&:hover': {
              transform: 'scale(1.05)',
            },
            transition: 'all 0.3s ease',
          }}
          onClick={() => (window.location.href = '/')}
        >
          <Box
            sx={{
              backgroundColor: '#667eea',
              borderRadius: 2,
              p: 1.5,
              mr: 2,
            }}
          >
            <RocketLaunchIcon sx={{ fontSize: 28, color: 'white' }} />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 800,
                color: '#667eea',
                letterSpacing: '-0.5px',
                lineHeight: 1.2,
              }}
            >
              invicta
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#764ba2',
                fontSize: '0.75rem',
                fontWeight: 500,
              }}
            >
              Smart Sourcing
            </Typography>
          </Box>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Navigation Links */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 3,
            mr: 3,
          }}
        >
          <Button
            color="inherit"
            onClick={() => handleScrollToSection('services')}
            sx={{
              color: '#667eea',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
              },
            }}
          >
            Services
          </Button>
          <Button
            color="inherit"
            onClick={() => handleScrollToSection('about')}
            sx={{
              color: '#667eea',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
              },
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            onClick={() => handleScrollToSection('faq')}
            sx={{
              color: '#667eea',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
              },
            }}
          >
            FAQ
          </Button>
        </Box>

        {/* Action Buttons */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {/* Find Suppliers Button */}
          <Button
            variant="outlined"
            onClick={openBuyerDialog}
            startIcon={<BuyerIcon sx={{ fontSize: 18 }} />}
            sx={{
              display: { xs: 'none', sm: 'flex' },
              color: '#667eea',
              borderColor: '#667eea',
              fontWeight: 600,
              textTransform: 'none',
              px: 3,
              py: 1,
              borderRadius: 3,
              '&:hover': {
                borderColor: '#5a6fd8',
                color: '#5a6fd8',
                backgroundColor: 'rgba(102, 126, 234, 0.05)',
              },
            }}
          >
            Find Suppliers
          </Button>

          {/* Become Supplier Button */}
          <Button
            variant="contained"
            onClick={openSupplierDialog}
            startIcon={<SupplierIcon sx={{ fontSize: 18 }} />}
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              fontWeight: 700,
              px: 3,
              py: 1.5,
              borderRadius: 3,
              textTransform: 'none',
              fontSize: '0.95rem',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
              '&:hover': {
                background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                transform: 'translateY(-1px)',
                boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Become Supplier
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
