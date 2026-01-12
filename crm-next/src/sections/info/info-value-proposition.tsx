import { Box, Typography, Container, Grid, keyframes } from '@mui/material';
import {
  Inventory2 as ProductIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
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

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export default function InfoValueProposition() {
  return (
    <Box sx={{ bgcolor: '#f8f9ff', py: 12 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: '#333',
              fontSize: { xs: '2rem', md: '3rem' },
              animation: `${fadeInUp} 1s ease-out`,
            }}
          >
            Focus on Growing Your Business
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              fontWeight: 400,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.5,
              animation: `${fadeInUp} 1s ease-out 0.2s both`,
            }}
          >
            While we handle the complex world of global sourcing and logistics
          </Typography>
        </Box>

        <Grid container spacing={6} justifyContent="center">
          {/* Product */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                textAlign: 'center',
                animation: `${fadeInUp} 1s ease-out 0.4s both`,
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  mb: 4,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {/* Animated background circle */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: 140,
                    height: 140,
                    borderRadius: '50%',
                    background:
                      'linear-gradient(135deg, #667eea20 0%, #764ba220 100%)',
                    animation: `${pulse} 3s ease-in-out infinite`,
                    zIndex: 0,
                  }}
                />

                {/* Main icon container */}
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    background:
                      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 12px 40px rgba(102, 126, 234, 0.3)',
                    position: 'relative',
                    zIndex: 1,
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 20px 60px rgba(102, 126, 234, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <ProductIcon sx={{ fontSize: 60, color: 'white' }} />
                </Box>

                {/* Floating elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -10,
                    right: 10,
                    width: 20,
                    height: 20,
                    bgcolor: '#4caf50',
                    borderRadius: '50%',
                    animation: `${rotate} 4s linear infinite`,
                    zIndex: 2,
                  }}
                />
              </Box>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: '#333',
                }}
              >
                Perfect Product Match
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                }}
              >
                We find exactly what you need, meeting your specifications and
                quality standards
              </Typography>
            </Box>
          </Grid>

          {/* Location */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                textAlign: 'center',
                animation: `${fadeInUp} 1s ease-out 0.6s both`,
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  mb: 4,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {/* Animated background circle */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: 140,
                    height: 140,
                    borderRadius: '50%',
                    background:
                      'linear-gradient(135deg, #4caf5020 0%, #81c78420 100%)',
                    animation: `${pulse} 3s ease-in-out infinite 0.5s`,
                    zIndex: 0,
                  }}
                />

                {/* Main icon container */}
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    background:
                      'linear-gradient(135deg, #4caf50 0%, #81c784 100%)',
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 12px 40px rgba(76, 175, 80, 0.3)',
                    position: 'relative',
                    zIndex: 1,
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 20px 60px rgba(76, 175, 80, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <LocationIcon sx={{ fontSize: 60, color: 'white' }} />
                </Box>

                {/* Floating elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -10,
                    left: 10,
                    width: 16,
                    height: 16,
                    bgcolor: '#ff9800',
                    borderRadius: 1,
                    animation: `${pulse} 2s ease-in-out infinite`,
                    zIndex: 2,
                  }}
                />
              </Box>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: '#333',
                }}
              >
                Global Delivery Network
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                }}
              >
                Seamless logistics from manufacturer to your doorstep, anywhere
                in the world
              </Typography>
            </Box>
          </Grid>

          {/* Time */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                textAlign: 'center',
                animation: `${fadeInUp} 1s ease-out 0.6s both`,
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  mb: 4,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {/* Animated background circle */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: 140,
                    height: 140,
                    borderRadius: '50%',
                    background:
                      'linear-gradient(135deg, #ff980020 0%, #ffb74d20 100%)',
                    animation: `${pulse} 3s ease-in-out infinite 1s`,
                    zIndex: 0,
                  }}
                />

                {/* Main icon container */}
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    background:
                      'linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)',
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 12px 40px rgba(255, 152, 0, 0.3)',
                    position: 'relative',
                    zIndex: 1,
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 20px 60px rgba(255, 152, 0, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <TimeIcon sx={{ fontSize: 60, color: 'white' }} />
                </Box>

                {/* Floating elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -10,
                    right: 15,
                    width: 12,
                    height: 12,
                    bgcolor: '#667eea',
                    borderRadius: '50%',
                    animation: `${rotate} 3s linear infinite reverse`,
                    zIndex: 2,
                  }}
                />
              </Box>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: '#333',
                }}
              >
                When it needed to be there
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                }}
              >
                On schedule, every time, with reliable lead times you can count
                on
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
