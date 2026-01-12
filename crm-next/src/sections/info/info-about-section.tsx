import { Box, Grid, Paper, Typography, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Business, Analytics, RocketLaunch } from '@mui/icons-material';

export default function InfoAboutSection() {
  return (
    <Box sx={{ py: 8, textAlign: 'center' }} id="about">
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          mb: 6,
          fontWeight: 700,
          color: '#333',
        }}
      >
        Why Choose Us
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 3 }}>
            <Business sx={{ fontSize: 60, color: '#667eea', mb: 2 }} />
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Expert Team
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Our experienced professionals understand the complexities of
              global sourcing and supply chain management.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ p: 3 }}>
            <Analytics sx={{ fontSize: 60, color: '#667eea', mb: 2 }} />
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Data-Driven
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We use advanced analytics and market intelligence to optimize your
              sourcing strategy and reduce costs.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ p: 3 }}>
            <RocketLaunch sx={{ fontSize: 60, color: '#667eea', mb: 2 }} />
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Fast Results
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Quick turnaround times and efficient processes to get your
              products to market faster than ever.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
