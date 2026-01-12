import {
  Box,
  Typography,
  Container,
  Grid,
  keyframes,
} from '@mui/material';
import {
  RocketLaunch as RocketIcon,
  Inventory as BoxIcon,
  Schedule as ClockIcon,
} from '@mui/icons-material';

// Animacije
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

const slideIn = keyframes`
  0% { transform: translateX(-100px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

interface InfoHeroSectionProps {
  onOpenBuyerDialog?: () => void;
  onOpenSupplierDialog?: () => void;
}

export default function InfoHeroSection({
  onOpenBuyerDialog,
  onOpenSupplierDialog,
}: InfoHeroSectionProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 8, position: 'relative' }}>
      <Grid
        container
        spacing={6}
        alignItems="center"
        sx={{ position: 'relative', zIndex: 1 }}
      >
        {/* Left side - Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                mb: 3,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Smart Sourcing
              <br />
              Made Simple
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                mb: 4,
                fontWeight: 400,
                lineHeight: 1.6,
                maxWidth: 500,
                mx: { xs: 'auto', md: 0 },
              }}
            >
              Connect with verified suppliers worldwide and streamline your
              procurement process with our intelligent sourcing platform.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                mb: 6,
                justifyContent: { xs: 'center', md: 'flex-start' },
                flexWrap: 'wrap',
              }}
            >
              {[
                '✓ Verified Suppliers',
                '✓ Quality Assurance',
                '✓ Global Logistics',
              ].map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: 'rgba(102, 126, 234, 0.1)',
                    px: 3,
                    py: 1.5,
                    borderRadius: 3,
                    border: '1px solid rgba(102, 126, 234, 0.2)',
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#667eea',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                    }}
                  >
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Right side - Animated Illustrations */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              height: 400,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Main Rocket */}
            <Box
              sx={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                animation: `${float} 3s ease-in-out infinite`,
                zIndex: 3,
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: '#667eea',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
                }}
              >
                <RocketIcon sx={{ fontSize: 40, color: 'white' }} />
              </Box>
            </Box>

            {/* Box/Package */}
            <Box
              sx={{
                position: 'absolute',
                top: '60%',
                right: '20%',
                animation: `${bounce} 2s infinite 1.5s`,
                zIndex: 2,
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  bgcolor: '#ff9800',
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(255, 152, 0, 0.3)',
                }}
              >
                <BoxIcon sx={{ fontSize: 25, color: 'white' }} />
              </Box>
            </Box>

            {/* Clock */}
            <Box
              sx={{
                position: 'absolute',
                top: '10%',
                right: '10%',
                animation: `${float} 4s ease-in-out infinite 0.5s`,
                zIndex: 1,
              }}
            >
              <Box
                sx={{
                  width: 45,
                  height: 45,
                  bgcolor: '#764ba2',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(118, 75, 162, 0.3)',
                }}
              >
                <ClockIcon sx={{ fontSize: 22, color: 'white' }} />
              </Box>
            </Box>

            {/* Background circles */}
            <Box
              sx={{
                position: 'absolute',
                width: 200,
                height: 200,
                borderRadius: '50%',
                border: '2px dashed #e8eaf6',
                animation: `${float} 6s ease-in-out infinite reverse`,
                zIndex: 0,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                width: 300,
                height: 300,
                borderRadius: '50%',
                border: '1px dashed #f3e5f5',
                animation: `${float} 8s ease-in-out infinite`,
                zIndex: 0,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
