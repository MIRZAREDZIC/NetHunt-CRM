'use client';

import { 
  Container, 
  Dialog, 
  Box, 
  useTheme, 
  useMediaQuery,
  DialogContent,
  IconButton,
} from '@mui/material';
import { useCallback } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import InfoHeroSection from '../info-hero-section';
import InfoPartnersSection from '../info-partners-section';
import InfoValueProposition from '../info-value-proposition';
import InfoServicesSection from '../info-services-section';
import InfoTestimonialSection from '../info-testimonial-section';
import InfoStatsSection from '../info-stats-section';
import InfoAboutSection from '../info-about-section';
import InfoFaqSection from '../info-faq-section';
import InfoCtaSection from '../info-cta-section';
import BuyerForm from '../buyer-form';
import SupplierForm from '../supplier-form';
import { useDialogContext } from '@/app/(app)/layout';

export default function InfoView() {
  const { 
    buyerDialogOpen, 
    supplierDialogOpen, 
    openBuyerDialog, 
    openSupplierDialog, 
    closeBuyerDialog, 
    closeSupplierDialog 
  } = useDialogContext();
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleBuyerSuccess = useCallback(() => {
    setTimeout(() => {
      closeBuyerDialog();
    }, 2000);
  }, [closeBuyerDialog]);

  const handleSupplierSuccess = useCallback(() => {
    setTimeout(() => {
      closeSupplierDialog();
    }, 2000);
  }, [closeSupplierDialog]);

  return (
    <Box sx={{ mt: 8 }}>
      {/* Hero Section */}
      <InfoHeroSection />

      {/* Partners Section */}
      <InfoPartnersSection />

      {/* Value Proposition */}
      <InfoValueProposition />

      {/* Services Section */}
      <InfoServicesSection />

      {/* Testimonial Section */}
      <InfoTestimonialSection />

      {/* Statistics Section */}
      <InfoStatsSection />

      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <InfoAboutSection />
      </Container>

      {/* FAQ Section */}
      <InfoFaqSection />

      {/* Final CTA Section */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="cta-section">
        <InfoCtaSection
          onOpenBuyerDialog={openBuyerDialog}
          onOpenSupplierDialog={openSupplierDialog}
        />
      </Container>

      {/* Buyer Dialog */}
      <Dialog
        open={buyerDialogOpen}
        onClose={closeBuyerDialog}
        maxWidth="md"
        fullWidth
        fullScreen={isMobile}
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: isMobile ? 0 : 2,
            maxHeight: isMobile ? '100vh' : '90vh',
            m: isMobile ? 0 : 2,
          },
          '& .MuiBackdrop-root': {
            backgroundColor: isMobile ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <DialogContent
          sx={{
            p: 0,
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <IconButton
              onClick={closeBuyerDialog}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                zIndex: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            <BuyerForm onSuccess={handleBuyerSuccess} />
          </Box>
        </DialogContent>
      </Dialog>

      {/* Supplier Dialog */}
      <Dialog
        open={supplierDialogOpen}
        onClose={closeSupplierDialog}
        maxWidth="md"
        fullWidth
        fullScreen={isMobile}
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: isMobile ? 0 : 2,
            maxHeight: isMobile ? '100vh' : '90vh',
            m: isMobile ? 0 : 2,
          },
          '& .MuiBackdrop-root': {
            backgroundColor: isMobile ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <DialogContent
          sx={{
            p: 0,
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <IconButton
              onClick={closeSupplierDialog}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                zIndex: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            <SupplierForm onSuccess={handleSupplierSuccess} />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
