import {
  Box,
  Typography,
  Container,
  keyframes,
  Dialog,
  IconButton,
} from '@mui/material';
import { PlayArrow as PlayIcon, Close as CloseIcon } from '@mui/icons-material';
import { useState } from 'react';

// Animacije
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

const ripple = keyframes`
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(2.4); opacity: 0; }
`;

export default function InfoTestimonialSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  const handleVideoOpen = () => {
    setVideoOpen(true);
  };

  const handleVideoClose = () => {
    setVideoOpen(false);
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        py: 12,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          animation: `${pulse} 4s ease-in-out infinite`,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.08)',
          animation: `${pulse} 3s ease-in-out infinite 1s`,
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            color: 'white',
            animation: `${fadeIn} 1s ease-out`,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              mb: 6,
              fontStyle: 'italic',
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              lineHeight: 1.3,
              maxWidth: 800,
              mx: 'auto',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            &quot;Invicta is saving us hundreds and hundreds of thousands of
            dollars per year.&quot;
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 3,
              animation: `${fadeIn} 1s ease-out 0.3s both`,
            }}
          >
            {/* Video play button with ripple effect */}
            <Box
              onClick={handleVideoOpen}
              sx={{
                position: 'relative',
                cursor: 'pointer',
                '&:hover .play-button': {
                  transform: 'scale(1.1)',
                  boxShadow: '0 8px 32px rgba(255, 255, 255, 0.3)',
                },
                '&:hover .ripple': {
                  animation: `${ripple} 1s ease-out infinite`,
                },
              }}
            >
              {/* Ripple effect */}
              <Box
                className="ripple"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  border: '2px solid rgba(255, 255, 255, 0.6)',
                  pointerEvents: 'none',
                }}
              />

              {/* Main play button */}
              <Box
                className="play-button"
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <PlayIcon sx={{ fontSize: 40, color: 'white', ml: 0.5 }} />
              </Box>
            </Box>

            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                Watch Customer Story
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                See how we transformed their supply chain
              </Typography>
            </Box>
          </Box>

          {/* Customer info */}
          <Box
            sx={{
              mt: 6,
              animation: `${fadeIn} 1s ease-out 0.6s both`,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                opacity: 0.9,
                fontSize: '1.1rem',
              }}
            >
              — Sarah Johnson, CEO at TechFlow Solutions
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Video Modal */}
      <Dialog
        open={videoOpen}
        onClose={handleVideoClose}
        maxWidth="lg"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            overflow: 'visible',
          },
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(4px)',
          },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          {/* Close button */}
          <IconButton
            onClick={handleVideoClose}
            sx={{
              position: 'absolute',
              top: -50,
              right: -10,
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Video container */}
          <Box
            sx={{
              position: 'relative',
              paddingBottom: '56.25%', // 16:9 aspect ratio
              height: 0,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
              title="Customer Testimonial Video"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}
