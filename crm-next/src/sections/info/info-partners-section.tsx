import { Box, Typography, Container, Grid, keyframes } from '@mui/material';
import {
  Business as BusinessIcon,
  Verified as VerifiedIcon,
  Public as GlobalIcon,
  TrendingUp as GrowthIcon,
} from '@mui/icons-material';

// Animacije
const fadeInUp = keyframes`
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

export default function InfoPartnersSection() {
  const partners = [
    { name: 'TechFlow', icon: BusinessIcon, color: '#667eea' },
    { name: 'GlobalTrade', icon: GlobalIcon, color: '#4caf50' },
    { name: 'VerifiedCorp', icon: VerifiedIcon, color: '#ff9800' },
    { name: 'GrowthLab', icon: GrowthIcon, color: '#764ba2' },
    { name: 'SmartSource', icon: BusinessIcon, color: '#2196f3' },
    { name: 'TradePro', icon: GlobalIcon, color: '#9c27b0' },
  ];

  return (
    <Box sx={{ bgcolor: 'white', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontWeight: 500,
              mb: 4,
              animation: `${fadeInUp} 1s ease-out`,
            }}
          >
            Trusted by leading companies worldwide
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {partners.map((partner, index) => {
            const IconComponent = partner.icon;
            return (
              <Grid item xs={6} sm={4} md={2} key={partner.name}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 3,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    animation: `${fadeInUp} 1s ease-out ${index * 0.1}s both`,
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      '& .partner-icon': {
                        animation: `${float} 2s ease-in-out infinite`,
                        color: partner.color,
                      },
                    },
                  }}
                >
                  <Box
                    className="partner-icon"
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 2,
                      bgcolor: `${partner.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <IconComponent
                      sx={{
                        fontSize: 32,
                        color: partner.color,
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: 'text.secondary',
                      textAlign: 'center',
                    }}
                  >
                    {partner.name}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>

        {/* Trust indicators */}
        <Box
          sx={{
            mt: 8,
            textAlign: 'center',
            animation: `${fadeInUp} 1s ease-out 0.8s both`,
          }}
        >
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <VerifiedIcon sx={{ color: '#4caf50', fontSize: 20 }} />
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', fontWeight: 500 }}
                >
                  Verified Suppliers
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <GlobalIcon sx={{ color: '#2196f3', fontSize: 20 }} />
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', fontWeight: 500 }}
                >
                  Global Network
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <GrowthIcon sx={{ color: '#ff9800', fontSize: 20 }} />
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', fontWeight: 500 }}
                >
                  Proven Results
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
