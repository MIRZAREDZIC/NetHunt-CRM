import { Box, Typography, Container, Grid, keyframes } from '@mui/material';
import { CheckCircle as CheckIcon } from '@mui/icons-material';

// Animacije
const fadeInLeft = keyframes`
  0% { transform: translateX(-30px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const checkAnimation = keyframes`
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

export default function InfoServicesSection() {
  const services = [
    'Find the perfect source for your needs',
    'Professional sampling and prototyping',
    'Comprehensive inspections and vetting',
    'Verify all required certifications',
    'Manage production timelines efficiently',
    'Navigate time zones and languages',
    'Rigorous quality control processes',
    'Shipping and consolidation services',
    'Handle customs and tariffs seamlessly',
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 12 }} id="services">
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 10,
          color: '#333',
          fontSize: { xs: '2rem', md: '3rem' },
        }}
      >
        What we do
      </Typography>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                mb: 3,
                p: 3,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
                border: '1px solid #e8eaf6',
                animation: `${fadeInLeft} 0.6s ease-out ${index * 0.1}s both`,
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 40px rgba(102, 126, 234, 0.15)',
                  borderColor: '#667eea',
                  '& .check-icon': {
                    animation: `${checkAnimation} 0.3s ease-out`,
                  },
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Box
                sx={{
                  mr: 3,
                  mt: 0.5,
                  position: 'relative',
                }}
              >
                <CheckIcon
                  className="check-icon"
                  sx={{
                    color: '#4caf50',
                    fontSize: 28,
                    filter: 'drop-shadow(0 2px 4px rgba(76, 175, 80, 0.3))',
                  }}
                />

                {/* Animated ring around check */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -2,
                    left: -2,
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    border: '2px solid transparent',
                    background:
                      'linear-gradient(45deg, #4caf50, #81c784) border-box',
                    mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    opacity: 0,
                    animation: `${checkAnimation} 0.5s ease-out ${index * 0.1 + 0.3}s both`,
                    zIndex: -1,
                  }}
                />
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  lineHeight: 1.5,
                  color: '#333',
                }}
              >
                {service}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Bottom decorative element */}
      <Box
        sx={{
          mt: 8,
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            width: 100,
            height: 4,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 2,
            mx: 'auto',
            opacity: 0.6,
          }}
        />
      </Box>
    </Container>
  );
}
