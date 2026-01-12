'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
  CircularProgress,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';

// Industry options
const industryOptions = [
  { value: 'Technology', label: 'Technology' },
  { value: 'Healthcare', label: 'Healthcare' },
  { value: 'Finance', label: 'Finance' },
  { value: 'Education', label: 'Education' },
  { value: 'Manufacturing', label: 'Manufacturing' },
  { value: 'Retail', label: 'Retail' },
  { value: 'Real Estate', label: 'Real Estate' },
  { value: 'Consulting', label: 'Consulting' },
  { value: 'Agriculture', label: 'Agriculture' },
  { value: 'Automotive', label: 'Automotive' },
  { value: 'Construction', label: 'Construction' },
  { value: 'Energy', label: 'Energy' },
  { value: 'Food & Beverage', label: 'Food & Beverage' },
  { value: 'Logistics', label: 'Logistics' },
  { value: 'Telecommunications', label: 'Telecommunications' },
  { value: 'Textiles', label: 'Textiles' },
  { value: 'Other', label: 'Other' },
];

// Budget range options
const budgetRangeOptions = [
  { value: 'Under $10K', label: 'Under $10,000' },
  { value: '$10K-$50K', label: '$10,000 - $50,000' },
  { value: '$50K-$100K', label: '$50,000 - $100,000' },
  { value: '$100K-$500K', label: '$100,000 - $500,000' },
  { value: 'Over $500K', label: 'Over $500,000' },
  { value: 'Not sure', label: 'Not sure yet' },
];

// Timeline options
const timelineOptions = [
  { value: '1 week', label: '1 week' },
  { value: '2 weeks', label: '2 weeks' },
  { value: '1 month', label: '1 month' },
  { value: '3 months', label: '3 months' },
  { value: '6 months', label: '6 months' },
  { value: '1 year', label: '1 year' },
];

// Urgency options
const urgencyOptions = [
  { value: 'Very High', label: 'Very High' },
  { value: 'High', label: 'High' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Low', label: 'Low' },
];

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  // Company Details
  companyName: Yup.string()
    .required('Company name is required')
    .min(2, 'Company name must be at least 2 characters')
    .max(255, 'Company name must not exceed 255 characters'),
  companyAddress: Yup.string()
    .required('Company address/website is required')
    .max(500, 'Address must not exceed 500 characters'),
  companyContact: Yup.string()
    .required('Company contact is required')
    .max(50, 'Contact must not exceed 50 characters'),
  companyEmail: Yup.string()
    .required('Company email is required')
    .email('Must be a valid email address')
    .max(255, 'Email must not exceed 255 characters'),
  companySize: Yup.string()
    .required('Company size is required')
    .oneOf(
      ['1-10', '11-50', '51-200', '201-500', '500+'],
      'Invalid company size'
    ),
  industry: Yup.string()
    .required('Industry is required')
    .oneOf(
      [
        'Technology',
        'Healthcare',
        'Finance',
        'Education',
        'Manufacturing',
        'Retail',
        'Real Estate',
        'Consulting',
        'Agriculture',
        'Automotive',
        'Construction',
        'Energy',
        'Food & Beverage',
        'Logistics',
        'Telecommunications',
        'Textiles',
        'Other',
      ],
      'Invalid industry'
    ),

  // Contact Person
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(100, 'First name must not exceed 100 characters'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(100, 'Last name must not exceed 100 characters'),
  position: Yup.string()
    .required('Position is required')
    .max(100, 'Position must not exceed 100 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Must be a valid email address')
    .max(255, 'Email must not exceed 255 characters'),
  phone: Yup.string()
    .required('Phone number is required')
    .max(20, 'Phone number must not exceed 20 characters'),

  // Requirements
  productInterest: Yup.string()
    .required('Product interest is required')
    .min(10, 'Product interest must be at least 10 characters')
    .max(500, 'Product interest must not exceed 500 characters'),
  requestDescription: Yup.string()
    .required('Request description is required')
    .min(10, 'Request description must be at least 10 characters')
    .max(1000, 'Request description must not exceed 1000 characters'),
  budgetRange: Yup.string()
    .required('Budget range is required')
    .oneOf(
      [
        'Under $10K',
        '$10K-$50K',
        '$50K-$100K',
        '$100K-$500K',
        'Over $500K',
        'Not sure',
      ],
      'Invalid budget range'
    ),
  requestedQuantities: Yup.string()
    .required('Requested quantities is required')
    .max(200, 'Requested quantities must not exceed 200 characters'),
  timeline: Yup.string()
    .required('Timeline is required')
    .oneOf(
      ['1 week', '2 weeks', '1 month', '3 months', '6 months', '1 year'],
      'Invalid timeline'
    ),
  urgency: Yup.string()
    .required('Urgency level is required')
    .oneOf(['Very High', 'High', 'Medium', 'Low'], 'Invalid urgency level'),
});

interface BuyerFormData {
  // Company Details
  companyName: string;
  companyAddress: string;
  companyContact: string;
  companyEmail: string;
  companySize: string;
  industry: string;

  // Contact Person
  firstName: string;
  lastName: string;
  position: string;
  email: string;
  phone: string;

  // Requirements
  productInterest: string;
  requestDescription: string;
  budgetRange: string;
  requestedQuantities: string;
  timeline: string;
  urgency: string;
}

// Default form values
const defaultValues: BuyerFormData = {
  companyName: '',
  companyAddress: '',
  companyContact: '',
  companyEmail: '',
  companySize: '',
  industry: '',
  firstName: '',
  lastName: '',
  position: '',
  email: '',
  phone: '',
  productInterest: '',
  requestDescription: '',
  budgetRange: '',
  requestedQuantities: '',
  timeline: '',
  urgency: '',
};

interface BuyerFormProps {
  onSuccess?: () => void;
}

export default function BuyerForm({ onSuccess }: BuyerFormProps) {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const methods = useForm<BuyerFormData>({
    resolver: yupResolver(validationSchema) as any,
    defaultValues,
    mode: 'onSubmit',
    shouldFocusError: true,
  });

  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = methods;

  // Memoized styles to prevent recreation on every render
  const inputStyles = useMemo(() => ({
    '& .MuiOutlinedInput-root': {
      borderRadius: 3,
      backgroundColor: '#fafafa',
      // Removed transition for better performance
      '&:hover': {
        backgroundColor: '#f5f5f5',
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#1976d2',
        },
      },
      '&.Mui-focused': {
        backgroundColor: 'white',
        // Simplified shadow for better performance
        boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)',
      },
    },
  }), []);

  const selectStyles = useMemo(() => ({
    '& .MuiOutlinedInput-root': {
      borderRadius: 3,
      backgroundColor: '#fafafa',
      '&:hover': {
        backgroundColor: '#f5f5f5',
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#1976d2',
        },
      },
      '&.Mui-focused': {
        backgroundColor: 'white',
        boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)',
      },
    },
  }), []);

  // Enhanced error handling
  const handleFormError = useCallback(
    (error: any) => {
      let errorMessage = 'Please check your form data and try again.';

      if (error.message?.includes('validation')) {
        errorMessage = 'Please correct the highlighted fields and try again.';
      } else if (error.message?.includes('network')) {
        errorMessage =
          'Network error. Please check your connection and try again.';
      }

      enqueueSnackbar(errorMessage, {
        variant: 'error',
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        autoHideDuration: 8000,
      });
    },
    [enqueueSnackbar]
  );

  // Handle validation errors
  const handleValidationErrors = useCallback(
    (errors: any) => {
      const errorFields = Object.keys(errors);
      if (errorFields.length > 0) {
        const firstError = errors[errorFields[0]];
        const fieldName = errorFields[0];

        // Create user-friendly field names
        const fieldLabels: { [key: string]: string } = {
          companyName: 'Company Name',
          companyAddress: 'Company Address/Website',
          companyContact: 'Company Contact',
          companyEmail: 'Company Email',
          companySize: 'Company Size',
          industry: 'Industry',
          firstName: 'First Name',
          lastName: 'Last Name',
          position: 'Position',
          email: 'Email',
          phone: 'Phone',
          productInterest: 'Product Interest',
          requestDescription: 'Request Description',
          budgetRange: 'Budget Range',
          requestedQuantities: 'Requested Quantities',
          timeline: 'Timeline',
          urgency: 'Urgency Level',
        };

        const friendlyFieldName = fieldLabels[fieldName] || fieldName;
        const errorMessage = `${friendlyFieldName}: ${firstError.message}`;

        enqueueSnackbar(errorMessage, {
          variant: 'error',
          anchorOrigin: { vertical: 'top', horizontal: 'right' },
          autoHideDuration: 8000,
        });
      }
    },
    [enqueueSnackbar]
  );

  const onSubmit: SubmitHandler<BuyerFormData> = useCallback(
    async (data: BuyerFormData) => {
      try {
        setLoading(true);

        // Send data with the field names that backend expects
        const crmData = {
          // Company Details - using backend expected field names
          companyName: data.companyName,
          companyAddress: data.companyAddress,
          companyContact: data.companyContact,
          companyEmail: data.companyEmail,
          companySize: data.companySize,
          industry: data.industry,

          // Contact Person Details - using backend expected field names
          firstName: data.firstName,
          lastName: data.lastName,
          position: data.position,
          email: data.email,
          phone: data.phone,

          // Requirements Details - using backend expected field names
          productInterest: data.productInterest,
          requestDescription: data.requestDescription,
          budgetRange: data.budgetRange,
          requestedQuantities: data.requestedQuantities,
          timeline: data.timeline,
          urgency: data.urgency,
        };

        const response = await fetch('/api/leads/buyer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(crmData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || 'Failed to submit buyer request'
          );
        }

        setSuccess(true);
        enqueueSnackbar(
          '🚀 Your buyer request has been submitted successfully! We will contact you soon!',
          {
            variant: 'success',
            anchorOrigin: { vertical: 'top', horizontal: 'right' },
            autoHideDuration: 6000,
          }
        );

        reset();

        // Call success callback after a short delay
        setTimeout(() => {
          onSuccess?.();
        }, 2000);
      } catch (err) {
        handleFormError(err);
      } finally {
        setLoading(false);
      }
    },
    [handleFormError, enqueueSnackbar, reset, onSuccess]
  );

  if (success) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Alert severity="success" sx={{ mb: 3 }}>
          Thank you! Your buyer request has been submitted successfully.
          We&apos;ll contact you soon.
        </Alert>
      </Box>
    );
  }

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit, handleValidationErrors)}
        noValidate
        sx={{
          maxWidth: { xs: '100%', sm: 600, md: 900 },
          mx: 'auto',
          p: { xs: 2, sm: 3, md: 4 },
          backgroundColor: 'white',
          borderRadius: 3,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: { xs: 3, md: 4 },
            fontWeight: 700,
            background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
          }}
        >
          Connect with Trusted Suppliers
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 5 },
            color: 'text.secondary',
            fontWeight: 400,
            maxWidth: 650,
            mx: 'auto',
            lineHeight: 1.6,
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
          }}
        >
          Register as a buyer and access our network of verified suppliers.
          Source quality products and materials for your business needs.
        </Typography>

        {/* Company Details Section */}
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 3,
              pb: 2,
              borderBottom: '3px solid',
              borderImage: 'linear-gradient(45deg, #1976d2, #42a5f5) 1',
            }}
          >
            <Box
              sx={{
                background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                borderRadius: 2,
                p: 1.5,
                mr: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
              }}
            >
              <BusinessIcon sx={{ color: 'white', fontSize: 22 }} />
            </Box>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{
                background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.2rem',
              }}
            >
              Company Information
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Company Name"
                {...methods.register('companyName')}
                error={!!errors.companyName}
                helperText={errors.companyName?.message}
                size="small"
                sx={inputStyles}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Address/Website"
                {...methods.register('companyAddress')}
                error={!!errors.companyAddress}
                helperText={errors.companyAddress?.message}
                size="small"
                sx={inputStyles}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contact"
                {...methods.register('companyContact')}
                error={!!errors.companyContact}
                helperText={errors.companyContact?.message}
                size="small"
                sx={inputStyles}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                {...methods.register('companyEmail')}
                error={!!errors.companyEmail}
                helperText={errors.companyEmail?.message}
                size="small"
                sx={inputStyles}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                error={!!errors.companySize}
                size="small"
                sx={selectStyles}
              >
                <InputLabel>Company Size</InputLabel>
                <Select
                  {...methods.register('companySize')}
                  label="Company Size"
                  defaultValue=""
                >
                  <MenuItem value="1-10">1-10 employees</MenuItem>
                  <MenuItem value="11-50">11-50 employees</MenuItem>
                  <MenuItem value="51-200">51-200 employees</MenuItem>
                  <MenuItem value="201-500">201-500 employees</MenuItem>
                  <MenuItem value="500+">500+ employees</MenuItem>
                </Select>
                {errors.companySize && (
                  <FormHelperText>
                    {errors.companySize.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl 
                fullWidth 
                error={!!errors.industry} 
                size="small"
                sx={selectStyles}
              >
                <InputLabel>Industry</InputLabel>
                <Select
                  {...methods.register('industry')}
                  label="Industry"
                  defaultValue=""
                >
                  <MenuItem value="Manufacturing">Manufacturing</MenuItem>
                  <MenuItem value="Technology">Technology</MenuItem>
                  <MenuItem value="Healthcare">Healthcare</MenuItem>
                  <MenuItem value="Finance">Finance</MenuItem>
                  <MenuItem value="Retail">Retail</MenuItem>
                  <MenuItem value="Construction">Construction</MenuItem>
                  <MenuItem value="Food & Beverage">Food & Beverage</MenuItem>
                  <MenuItem value="Agriculture">Agriculture</MenuItem>
                  <MenuItem value="Textiles">Textiles</MenuItem>
                  <MenuItem value="Automotive">Automotive</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
                {errors.industry && (
                  <FormHelperText>{errors.industry.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {/* Contact Person Section */}
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 3,
              pb: 2,
              borderBottom: '3px solid',
              borderImage: 'linear-gradient(45deg, #1976d2, #42a5f5) 1',
            }}
          >
            <Box
              sx={{
                background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                borderRadius: 2,
                p: 1.5,
                mr: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
              }}
            >
              <PersonIcon sx={{ color: 'white', fontSize: 22 }} />
            </Box>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{
                background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.2rem',
              }}
            >
              Contact Person
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                {...methods.register('firstName')}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                size="small"
                sx={inputStyles}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                {...methods.register('lastName')}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                size="small"
                sx={inputStyles}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Position"
                {...methods.register('position')}
                error={!!errors.position}
                helperText={errors.position?.message}
                size="small"
                sx={inputStyles}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                {...methods.register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
                size="small"
                sx={inputStyles}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                {...methods.register('phone')}
                error={!!errors.phone}
                helperText={errors.phone?.message}
                size="small"
                sx={inputStyles}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Requirements Section */}
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 3,
              pb: 2,
              borderBottom: '3px solid',
              borderImage: 'linear-gradient(45deg, #1976d2, #42a5f5) 1',
            }}
          >
            <Box
              sx={{
                background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                borderRadius: 2,
                p: 1.5,
                mr: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
              }}
            >
              <DescriptionIcon sx={{ color: 'white', fontSize: 22 }} />
            </Box>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{
                background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.2rem',
              }}
            >
              Purchase Requirements
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="What products or services do you want to buy?"
                placeholder="Specify the products, materials, or services you're looking for..."
                {...methods.register('productInterest')}
                error={!!errors.productInterest}
                helperText={errors.productInterest?.message}
                size="small"
                sx={inputStyles}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Describe your specific requirements and quality standards"
                placeholder="Technical specifications, quality requirements, certifications needed..."
                {...methods.register('requestDescription')}
                error={!!errors.requestDescription}
                helperText={errors.requestDescription?.message}
                size="small"
                sx={inputStyles}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                error={!!errors.budgetRange}
                size="small"
                sx={selectStyles}
              >
                <InputLabel>Budget Range</InputLabel>
                <Select
                  {...methods.register('budgetRange')}
                  label="Budget Range"
                  defaultValue=""
                >
                  <MenuItem value="Under $10K">Under $10K</MenuItem>
                  <MenuItem value="$10K-$50K">$10K-$50K</MenuItem>
                  <MenuItem value="$50K-$100K">$50K-$100K</MenuItem>
                  <MenuItem value="$100K-$500K">$100K-$500K</MenuItem>
                  <MenuItem value="Over $500K">Over $500K</MenuItem>
                  <MenuItem value="Not sure">Not sure</MenuItem>
                </Select>
                {errors.budgetRange && (
                  <FormHelperText>
                    {errors.budgetRange.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="How much quantity do you need?"
                placeholder="e.g., 1000 units, 50 tons, monthly supply..."
                {...methods.register('requestedQuantities')}
                error={!!errors.requestedQuantities}
                helperText={errors.requestedQuantities?.message}
                size="small"
                sx={inputStyles}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl 
                fullWidth 
                error={!!errors.timeline} 
                size="small"
                sx={selectStyles}
              >
                <InputLabel>Timeline</InputLabel>
                <Select
                  {...methods.register('timeline')}
                  label="Timeline"
                  defaultValue=""
                >
                  <MenuItem value="1 week">1 week</MenuItem>
                  <MenuItem value="2 weeks">2 weeks</MenuItem>
                  <MenuItem value="1 month">1 month</MenuItem>
                  <MenuItem value="3 months">3 months</MenuItem>
                  <MenuItem value="6 months">6 months</MenuItem>
                  <MenuItem value="1 year">1 year</MenuItem>
                </Select>
                {errors.timeline && (
                  <FormHelperText>{errors.timeline.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl 
                fullWidth 
                error={!!errors.urgency} 
                size="small"
                sx={selectStyles}
              >
                <InputLabel>Urgency Level</InputLabel>
                <Select
                  {...methods.register('urgency')}
                  label="Urgency Level"
                  defaultValue=""
                >
                  <MenuItem value="Very High">Very High</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                </Select>
                {errors.urgency && (
                  <FormHelperText>{errors.urgency.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {/* Submit Button */}
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            sx={{
              minWidth: { xs: '100%', sm: 250 },
              py: 2.5,
              px: 5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 4,
              background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
              boxShadow: '0 6px 20px rgba(25, 118, 210, 0.3)',
              textTransform: 'none',
              '&:hover': {
                background: 'linear-gradient(45deg, #1565c0, #1976d2)',
                boxShadow: '0 8px 25px rgba(25, 118, 210, 0.4)',
                transform: 'translateY(-2px)',
              },
              '&:disabled': {
                background: '#ccc',
                boxShadow: 'none',
              },
              transition: 'all 0.3s ease',
            }}
          >
            {isSubmitting ? (
              <>
                <CircularProgress size={20} sx={{ mr: 1, color: 'white' }} />
                Submitting...
              </>
            ) : (
              'Submit Request'
            )}
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
}
