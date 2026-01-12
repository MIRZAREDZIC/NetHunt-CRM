import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  keyframes,
} from '@mui/material';
import {
  TrendingUp as GrowthIcon,
  ShoppingCart as BuyerIcon,
  Business as SupplierIcon,
  CheckCircle as CheckIcon,
} from '@mui/icons-material';

// Animacije
const fadeInUp = keyframes`
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

interface InfoCtaSectionProps {
  onOpenBuyerDialog: () => void;
  onOpenSupplierDialog: () => void;
}

export default function InfoCtaSection({
  onOpenBuyerDialog,
  onOpenSupplierDialog,
}: InfoCtaSectionProps) {
  return (
    <Box sx={{ textAlign: 'center', py: 10 }}>
      <Paper
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          p: { xs: 6, md: 10 },
          borderRadius: 8,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden',
          animation: `${fadeInUp} 1s ease-out`,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              mb: 4,
              animation: `${pulse} 3s ease-in-out infinite`,
            }}
          >
            <GrowthIcon
              sx={{
                fontSize: 60,
                color: 'white',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
              }}
            />
          </Box>

          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 800,
              mb: 2,
              color: 'white',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Boost your business!
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 6,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '1.2rem',
            }}
          >
            Join thousands of companies already transforming their supply chain
            with our global sourcing platform.
          </Typography>

          {/* Benefits */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 4,
              mb: 8,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            {[
              'Verified suppliers',
              'Global reach',
              'Cost savings',
              '24/7 support',
            ].map((benefit, index) => (
              <Box
                key={benefit}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  animation: `${fadeInUp} 1s ease-out ${0.2 + index * 0.1}s both`,
                }}
              >
                <CheckIcon sx={{ color: '#4caf50', fontSize: 20 }} />
                <Typography
                  variant="body2"
                  sx={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500 }}
                >
                  {benefit}
                </Typography>
              </Box>
            ))}
          </Box>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={4}
            justifyContent="center"
            alignItems="center"
            sx={{ animation: `${fadeInUp} 1s ease-out 0.6s both` }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={onOpenBuyerDialog}
              startIcon={<BuyerIcon sx={{ fontSize: 24 }} />}
              sx={{
                px: 6,
                py: 3,
                borderRadius: 6,
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '1.2rem',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
                color: '#667eea',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 12px 40px rgba(255, 255, 255, 0.3)',
                minWidth: 220,
                '&:hover': {
                  background:
                    'linear-gradient(135deg, #f8f9ff 0%, #e8eaf6 100%)',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
              }}
            >
              I&apos;m a Buyer
            </Button>

            <Button
              variant="contained"
              size="large"
              onClick={onOpenSupplierDialog}
              startIcon={<SupplierIcon sx={{ fontSize: 24 }} />}
              sx={{
                px: 6,
                py: 3,
                borderRadius: 6,
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '1.2rem',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
                color: '#667eea',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 12px 40px rgba(255, 255, 255, 0.3)',
                minWidth: 220,
                '&:hover': {
                  background:
                    'linear-gradient(135deg, #f8f9ff 0%, #e8eaf6 100%)',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
              }}
            >
              I&apos;m a Supplier
            </Button>
          </Stack>

          <Typography
            variant="body2"
            sx={{
              mt: 6,
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.95rem',
              animation: `${fadeInUp} 1s ease-out 0.8s both`,
            }}
          >
            ✨ Free to get started • No setup fees • Cancel anytime
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
