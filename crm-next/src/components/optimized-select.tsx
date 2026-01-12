import React, { memo, useMemo } from 'react';
import { 
  FormControl, 
  InputLabel, 
  Select, 
  FormHelperText,
  SelectProps,
  FormControlProps 
} from '@mui/material';

interface OptimizedSelectProps {
  label: string;
  error?: boolean;
  helperText?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  size?: 'small' | 'medium';
  selectProps?: Omit<SelectProps, 'label'>;
  formControlProps?: Omit<FormControlProps, 'fullWidth' | 'error' | 'size'>;
}

// Memoized styles outside component to prevent recreation
const createSelectStyles = () => ({
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

const OptimizedSelect = memo<OptimizedSelectProps>(({ 
  label,
  error = false,
  helperText,
  children,
  fullWidth = true,
  size = 'small',
  selectProps,
  formControlProps,
  ...props 
}) => {
  // Memoize styles to prevent recreation on every render
  const selectStyles = useMemo(() => createSelectStyles(), []);

  return (
    <FormControl
      fullWidth={fullWidth}
      error={error}
      size={size}
      sx={selectStyles}
      {...formControlProps}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        {...selectProps}
        {...props}
      >
        {children}
      </Select>
      {helperText && (
        <FormHelperText>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
});

OptimizedSelect.displayName = 'OptimizedSelect';

export default OptimizedSelect; 