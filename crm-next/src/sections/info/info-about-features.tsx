import { Box, Grid, Paper, Typography, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function InfoAboutFeatures() {
  return (
    <Grid container spacing={6} sx={{ mb: 16 }}>
      <Grid item xs={12} md={6}>
        <Paper
          elevation={0}
          sx={{
            p: 5,
            height: '100%',
            border: '1px solid #e8eaf6',
            borderRadius: 4,
            background: 'linear-gradient(135deg, #fafbff 0%, #ffffff 100%)',
            '&:hover': {
              boxShadow: '0 12px 40px rgba(102, 126, 234, 0.15)',
              transform: 'translateY(-6px)',
              borderColor: '#667eea',
            },
            transition: 'all 0.4s ease',
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, color: '#667eea', mb: 3 }}
          >
            About Our System
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'text.secondary',
            }}
          >
            Our CRM system is designed to help you manage customer relationships
            effectively. With powerful features and an intuitive interface, you
            can streamline your business operations and improve customer
            satisfaction while driving growth.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper
          elevation={0}
          sx={{
            p: 5,
            height: '100%',
            border: '1px solid #e8eaf6',
            borderRadius: 4,
            background: 'linear-gradient(135deg, #fafbff 0%, #ffffff 100%)',
            '&:hover': {
              boxShadow: '0 12px 40px rgba(102, 126, 234, 0.15)',
              transform: 'translateY(-6px)',
              borderColor: '#667eea',
            },
            transition: 'all 0.4s ease',
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, color: '#667eea', mb: 3 }}
          >
            Key Features
          </Typography>
          <Stack spacing={2.5}>
            {[
              'Customer Management',
              'Lead Tracking',
              'Task Management',
              'Analytics Dashboard',
              'Communication Tools',
            ].map((feature, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircleIcon
                  sx={{ color: '#4caf50', mr: 2.5, fontSize: 22 }}
                />
                <Typography
                  variant="body1"
                  sx={{ fontSize: '1.05rem', fontWeight: 500 }}
                >
                  {feature}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}
