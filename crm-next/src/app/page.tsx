'use client';

import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Paper,
  Stack,
  Chip,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  RocketLaunch as RocketIcon,
  CheckCircle as CheckIcon,
  Business as BusinessIcon,
  TrendingUp as TrendingIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
  Analytics as AnalyticsIcon,
  ExpandMore as ExpandMoreIcon,
  Star as StarIcon,
  PlayArrow as PlayIcon,
} from '@mui/icons-material';

export default function Home() {
  const services = [
    'Find the perfect source',
    'Sampling and prototyping',
    'Handle inspections and vetting',
    'Confirm certifications',
    'Manage production timelines',
    'Quality control processes',
    'Shipping and consolidation',
    'Customs and tariffs handling',
    'End-to-end project management',
  ];

  const features = [
    {
      icon: <BusinessIcon sx={{ fontSize: 40, color: '#667eea' }} />,
      title: 'US-based Operations',
      description: 'Local support with global reach for your business needs',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#667eea' }} />,
      title: 'Quality Control',
      description: 'Rigorous factory vetting and quality assurance processes',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: '#667eea' }} />,
      title: 'Fast Delivery',
      description: 'Reliable lead times and efficient shipping solutions',
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40, color: '#667eea' }} />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your sourcing needs',
    },
  ];

  const stats = [
    { number: '500+', label: 'Manufacturing Partners' },
    { number: '2000+', label: 'Products Sourced' },
    { number: '$2M+', label: 'Dollars Saved for Clients' },
    { number: '50+', label: 'Countries Served' },
  ];

  const faqs = [
    {
      question: 'How is Smart Sourcing different?',
      answer:
        'We work as a 4PL partner for your sourcing needs, rather than working as a vendor. We focus on building efficiencies in your supply chain through consolidation techniques, unique freight forwarding, and global sources.',
    },
    {
      question: 'What is a 4PL?',
      answer:
        '4PL - Fourth-Party Logistics. We manage both logistics activities and execution across your entire supply chain, offering strategic insight and comprehensive management.',
    },
    {
      question: 'Do you vet suppliers?',
      answer:
        'Yes! Our team physically visits and audits factories worldwide. From environmental certifications to social auditing, we find factories that align with your goals and values.',
    },
    {
      question: 'Can you help us scale?',
      answer:
        'Absolutely! We are your scalable partner. Whether you need to expand production, add new product lines, or increase quality standards, we can help you grow.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Box sx={{ mb: 4 }}>
            <RocketIcon sx={{ fontSize: 80, color: '#667eea', mb: 2 }} />
          </Box>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: '2.5rem', md: '4rem' },
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.2,
            }}
          >
            Your Smart Source
          </Typography>

          <Typography
            variant="h4"
            color="text.secondary"
            sx={{
              mb: 6,
              maxWidth: 700,
              mx: 'auto',
              fontWeight: 400,
              lineHeight: 1.4,
            }}
          >
            We know where to get it and how to get it where it needs to be.
          </Typography>

          <Button
            variant="contained"
            size="large"
            href="/app/leads"
            sx={{
              px: 8,
              py: 3,
              borderRadius: 4,
              fontWeight: 600,
              fontSize: '1.2rem',
              textTransform: 'none',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
              '&:hover': {
                background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 40px rgba(102, 126, 234, 0.4)',
              },
            }}
          >
            Get a Quote
          </Button>
        </Box>
      </Container>

      {/* Value Proposition */}
      <Box sx={{ bgcolor: '#f8f9ff', py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 700,
              mb: 8,
              color: '#333',
            }}
          >
            The biggest thing we do is let you focus on bigger things
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    bgcolor: '#667eea',
                    borderRadius: 2,
                    mx: 'auto',
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <BusinessIcon sx={{ fontSize: 50, color: 'white' }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  The product you wanted
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    bgcolor: '#764ba2',
                    borderRadius: 2,
                    mx: 'auto',
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TrendingIcon sx={{ fontSize: 50, color: 'white' }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Where you wanted it to be
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    bgcolor: '#4caf50',
                    borderRadius: 2,
                    mx: 'auto',
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <SpeedIcon sx={{ fontSize: 50, color: 'white' }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  When it needed to be there
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 10 }} id="services">
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 700, mb: 8, color: '#333' }}
        >
          What we do
        </Typography>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CheckIcon sx={{ color: '#4caf50', mr: 2, fontSize: 24 }} />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {service}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonial Section */}
      <Box sx={{ bgcolor: '#667eea', py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, mb: 4, fontStyle: 'italic' }}
            >
              &quot;Invicta is saving us hundreds and hundreds of thousands of
              dollars per year.&quot;
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  bgcolor: 'rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <PlayIcon sx={{ fontSize: 30 }} />
              </Box>
              <Typography variant="body1">Play video testimonial</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Products/Services Showcase */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 700, mb: 2, color: '#333' }}
        >
          &mdash;Can you really source anything?
        </Typography>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 700, mb: 8, color: '#667eea' }}
        >
          &mdash;Yes! We can source anything from tech products to custom
          merchandise.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  width: 120,
                  height: 120,
                  bgcolor: '#f8f9ff',
                  borderRadius: 3,
                  mx: 'auto',
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #e8eaf6',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    borderColor: '#667eea',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <AnalyticsIcon sx={{ fontSize: 50, color: '#667eea' }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                Tech Products
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  width: 120,
                  height: 120,
                  bgcolor: '#f8f9ff',
                  borderRadius: 3,
                  mx: 'auto',
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #e8eaf6',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    borderColor: '#667eea',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <BusinessIcon sx={{ fontSize: 50, color: '#764ba2' }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                Custom Apparel
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  width: 120,
                  height: 120,
                  bgcolor: '#f8f9ff',
                  borderRadius: 3,
                  mx: 'auto',
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #e8eaf6',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    borderColor: '#667eea',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <RocketIcon sx={{ fontSize: 50, color: '#4caf50' }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                Industrial Equipment
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  width: 120,
                  height: 120,
                  bgcolor: '#f8f9ff',
                  borderRadius: 3,
                  mx: 'auto',
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #e8eaf6',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    borderColor: '#667eea',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <StarIcon sx={{ fontSize: 50, color: '#ff9800' }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                Promotional Items
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 10 }} id="about">
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 700, mb: 8, color: '#333' }}
        >
          How Smart Sourcing sets us apart
        </Typography>

        <Grid container spacing={6}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid #e8eaf6',
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(102, 126, 234, 0.15)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ mb: 3 }}>{feature.icon}</Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ bgcolor: '#f8f9ff', py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      color: '#667eea',
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Paper
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            p: 8,
            borderRadius: 4,
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
            Say hello
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Receive a free quote or schedule a demo now.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/app/leads"
            sx={{
              bgcolor: 'white',
              color: '#667eea',
              px: 6,
              py: 2,
              fontWeight: 600,
              '&:hover': {
                bgcolor: '#f5f5f5',
              },
            }}
          >
            Get a Quote
          </Button>
        </Paper>
      </Container>

      {/* FAQ Section */}
      <Container maxWidth="lg" sx={{ py: 10 }} id="faq">
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 700, mb: 8, color: '#333' }}
        >
          FAQ
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Whatever your question, we&apos;re the answer
        </Typography>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{ mb: 2, boxShadow: 'none', border: '1px solid #e8eaf6' }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>

      {/* Final CTA */}
      <Box sx={{ bgcolor: '#667eea', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
              Let&apos;s get started
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Receive a quote or schedule a demo now.
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="/app/leads"
              sx={{
                bgcolor: 'white',
                color: '#667eea',
                px: 6,
                py: 2,
                fontWeight: 600,
                '&:hover': {
                  bgcolor: '#f5f5f5',
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: '#1a1a1a', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Company Info */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                  sx={{
                    backgroundColor: '#667eea',
                    borderRadius: 2,
                    p: 1.5,
                    mr: 2,
                  }}
                >
                  <RocketIcon sx={{ fontSize: 28, color: 'white' }} />
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, color: 'white' }}
                  >
                    invicta
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#999' }}>
                    Smart Sourcing
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="body2"
                sx={{ color: '#ccc', mb: 3, lineHeight: 1.6 }}
              >
                We&apos;re your scalable sourcing partner, helping businesses
                find the right products at the right price, delivered when you
                need them.
              </Typography>
            </Grid>

            {/* Services */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 3, color: 'white' }}
              >
                Services
              </Typography>
              <Stack spacing={1}>
                {[
                  'Smart Sourcing',
                  'Quality Control',
                  'Logistics',
                  'Consulting',
                ].map(service => (
                  <Typography
                    key={service}
                    variant="body2"
                    sx={{
                      color: '#ccc',
                      cursor: 'pointer',
                      '&:hover': { color: '#667eea' },
                    }}
                  >
                    {service}
                  </Typography>
                ))}
              </Stack>
            </Grid>

            {/* Company */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 3, color: 'white' }}
              >
                Company
              </Typography>
              <Stack spacing={1}>
                {['About', 'Sustainability', 'Blog', 'Case Studies'].map(
                  item => (
                    <Typography
                      key={item}
                      variant="body2"
                      sx={{
                        color: '#ccc',
                        cursor: 'pointer',
                        '&:hover': { color: '#667eea' },
                      }}
                    >
                      {item}
                    </Typography>
                  )
                )}
              </Stack>
            </Grid>

            {/* Contact */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 3, color: 'white' }}
              >
                Stay updated
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#ccc', mb: 3, lineHeight: 1.6 }}
              >
                Be in touch to get a quote, schedule a demo, or just hop on a
                call. Whatever your sourcing question, we&apos;re the answer.
              </Typography>
              <Button
                variant="contained"
                href="/app/leads"
                sx={{
                  background:
                    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': {
                    background:
                      'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                  },
                }}
              >
                Get in Touch
              </Button>
            </Grid>
          </Grid>

          {/* Bottom Footer */}
          <Box
            sx={{
              borderTop: '1px solid #333',
              mt: 6,
              pt: 4,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Typography variant="body2" sx={{ color: '#999' }}>
              © 2024 Invicta Inc. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Typography
                variant="body2"
                sx={{
                  color: '#ccc',
                  cursor: 'pointer',
                  '&:hover': { color: '#667eea' },
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#ccc',
                  cursor: 'pointer',
                  '&:hover': { color: '#667eea' },
                }}
              >
                Terms & Conditions
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
