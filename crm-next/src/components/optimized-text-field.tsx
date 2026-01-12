import React, { memo, useMemo } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

interface OptimizedTextFieldProps extends Omit<TextFieldProps, 'sx'> {
  variant?: 'standard' | 'outlined' | 'filled';
}

// Memoized styles outside component to prevent recreation
const createInputStyles = () => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 3,
    backgroundColor: '#fafafa',
    // No transitions for better performance
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
});

const OptimizedTextField = memo<OptimizedTextFieldProps>(({ 
  variant = 'outlined',
  size = 'small',
  fullWidth = true,
  ...props 
}) => {
  // Memoize styles to prevent recreation on every render
  const inputStyles = useMemo(() => createInputStyles(), []);

  return (
    <TextField
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      sx={inputStyles}
      {...props}
    />
  );
});

OptimizedTextField.displayName = 'OptimizedTextField';

export default OptimizedTextField; 