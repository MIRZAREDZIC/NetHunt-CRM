import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  keyframes,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

// Animacije
const fadeInUp = keyframes`
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

export default function InfoFaqSection() {
  const faqs = [
    {
      question: 'How is Smart Sourcing different from traditional sourcing?',
      answer:
        'We work as a 4PL partner for your sourcing needs, rather than working as a vendor. On top of getting you amazing prices, we work on building efficiencies in your supply chain. By implementing consolidation techniques, unique freight forwarding, inventory projections, and global sources, we enable you to outsource your supply chain management, and in the end save money compared to doing it all in-house.',
    },
    {
      question: 'How can we work together?',
      answer:
        'Looking for a specific product and want to talk pricing? Simply reach out with the details of your project and we will get back to you with a free quote for your project. We handle everything from initial sourcing to final delivery.',
    },
    {
      question: 'What is a 4PL and how does it benefit us?',
      answer:
        "4PL - Fourth-Party Logistics. In a 4PL model, an enterprise outsources management of logistics activities as well as the execution across the supply chain. The 4PL provider typically offers more strategic insight and management over the enterprise's supply chain, leading to better efficiency and cost savings.",
    },
    {
      question: 'Do you vet suppliers and ensure quality?',
      answer:
        'Yes! Our team is constantly on the move, physically visiting and auditing factories and partners all around the world. From environmental certifications to social auditing, we can find you the perfect factory that aligns with your goals and values. We maintain strict quality control standards throughout the entire process.',
    },
    {
      question: 'What about duties, tariffs, and customs?',
      answer:
        'Our team can help with the entire process, giving you a finalized delivered duties paid price and taking care of all the headaches that come with importation. We also help analyze your products to find the best classifications or country of origin to help you save on costs.',
    },
    {
      question: 'Can you help us scale our operations?',
      answer:
        'Of course! We are here to be your scalable partner, so if you need to expand production, add new product lines, or increase quality standards, we can help. Our network grows with your business needs.',
    },
    {
      question: 'What kind of shipping methods do you offer?',
      answer:
        'We work to find the most efficient shipping method to fit your timeline and budget. From Air, Express, Ocean, Private Trucking, Rail transport and more, we can handle it all. We optimize routes and methods based on your specific requirements.',
    },
    {
      question: 'How do you ensure product quality and compliance?',
      answer:
        'We have a comprehensive quality assurance program that includes pre-production samples, in-line inspections, and final quality checks. All our partner factories are regularly audited for compliance with international standards and certifications.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 12 }} id="faq">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
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
          FAQ
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{
            mb: 2,
            animation: `${fadeInUp} 1s ease-out 0.2s both`,
          }}
        >
          Whatever your question, we&apos;re the answer
        </Typography>
        <Box
          sx={{
            width: 80,
            height: 4,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 2,
            mx: 'auto',
            animation: `${fadeInUp} 1s ease-out 0.4s both`,
          }}
        />
      </Box>

      <Box sx={{ maxWidth: 900, mx: 'auto' }}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 2,
              boxShadow: 'none',
              border: '1px solid #e8eaf6',
              borderRadius: '12px !important',
              overflow: 'hidden',
              animation: `${fadeInUp} 0.6s ease-out ${index * 0.1 + 0.5}s both`,
              '&:before': {
                display: 'none',
              },
              '&.Mui-expanded': {
                margin: '0 0 16px 0',
                boxShadow: '0 8px 32px rgba(102, 126, 234, 0.15)',
                borderColor: '#667eea',
              },
              '&:hover': {
                borderColor: '#667eea',
                boxShadow: '0 4px 20px rgba(102, 126, 234, 0.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: '#667eea',
                    fontSize: 28,
                  }}
                />
              }
              sx={{
                py: 2,
                px: 3,
                '& .MuiAccordionSummary-content': {
                  margin: '12px 0',
                },
                '&:hover': {
                  backgroundColor: 'rgba(102, 126, 234, 0.04)',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#333',
                  fontSize: '1.1rem',
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                px: 3,
                pb: 3,
                pt: 0,
                backgroundColor: '#fafbff',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.7,
                  fontSize: '1rem',
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Bottom CTA */}
      <Box
        sx={{
          textAlign: 'center',
          mt: 8,
          animation: `${fadeInUp} 1s ease-out 1.5s both`,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, color: '#333' }}>
          Still have questions?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Our team is here to help you with any additional questions about our
          sourcing services.
        </Typography>
      </Box>
    </Container>
  );
}
