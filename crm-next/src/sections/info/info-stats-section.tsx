import { Box, Typography, Container, Grid, keyframes } from '@mui/material';
import {
  Business as BusinessIcon,
  Inventory as ProductIcon,
  AttachMoney as MoneyIcon,
  Public as GlobalIcon,
} from '@mui/icons-material';

// Animacije
const fadeInUp = keyframes`
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const countUp = keyframes`
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

export default function InfoStatsSection() {
  const stats = [
    {
      icon: BusinessIcon,
      number: '500+',
      label: 'Manufacturing Partners',
      description: 'Vetted suppliers worldwide',
      color: '#667eea',
    },
    {
      icon: ProductIcon,
      number: '2000+',
      label: 'Products Sourced',
      description: 'Successfully delivered',
      color: '#4caf50',
    },
    {
      icon: MoneyIcon,
      number: '$2M+',
      label: 'Dollars Saved',
      description: 'For our clients annually',
      color: '#ff9800',
    },
    {
      icon: GlobalIcon,
      number: '50+',
      label: 'Countries Served',
      description: 'Global reach and delivery',
      color: '#764ba2',
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: '#f8f9ff',
        py: 12,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '-5%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea10 0%, #764ba210 100%)',
          animation: `${float} 6s ease-in-out infinite`,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '-3%',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4caf5010 0%, #ff980010 100%)',
          animation: `${float} 8s ease-in-out infinite 2s`,
        }}
      />

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
            Trusted by businesses worldwide
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              animation: `${fadeInUp} 1s ease-out 0.2s both`,
            }}
          >
            Our numbers speak for themselves
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    borderRadius: 4,
                    background:
                      'linear-gradient(135deg, #ffffff 0%, #fafbff 100%)',
                    border: '1px solid #e8eaf6',
                    animation: `${fadeInUp} 0.8s ease-out ${index * 0.2 + 0.4}s both`,
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 60px rgba(102, 126, 234, 0.15)',
                      borderColor: stat.color,
                      '& .stat-icon': {
                        animation: `${countUp} 0.5s ease-out`,
                      },
                    },
                    transition: 'all 0.4s ease',
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      mb: 3,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${stat.color}20 0%, ${stat.color}10 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                      }}
                    >
                      <IconComponent
                        className="stat-icon"
                        sx={{
                          fontSize: 40,
                          color: stat.color,
                          filter: `drop-shadow(0 2px 4px ${stat.color}30)`,
                        }}
                      />

                      {/* Animated ring */}
                      <Box
                        sx={{
                          position: 'absolute',
                          width: 90,
                          height: 90,
                          borderRadius: '50%',
                          border: `2px solid ${stat.color}20`,
                          animation: `${float} 3s ease-in-out infinite ${index * 0.5}s`,
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Number */}
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      mb: 1,
                      color: stat.color,
                      fontSize: { xs: '2.5rem', md: '3rem' },
                      animation: `${countUp} 1s ease-out ${index * 0.2 + 0.8}s both`,
                    }}
                  >
                    {stat.number}
                  </Typography>

                  {/* Label */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: '#333',
                    }}
                  >
                    {stat.label}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.95rem',
                    }}
                  >
                    {stat.description}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>

        {/* Bottom message */}
        <Box
          sx={{
            textAlign: 'center',
            mt: 10,
            animation: `${fadeInUp} 1s ease-out 1.5s both`,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: '#333',
              fontWeight: 600,
              mb: 2,
            }}
          >
            Join hundreds of satisfied customers
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Let us help you optimize your supply chain and reduce costs
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
