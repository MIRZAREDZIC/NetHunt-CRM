import { forwardRef } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export interface RHFTextFieldProps extends Omit<TextFieldProps, 'name'> {
  name: string;
}

const RHFTextField = forwardRef<HTMLDivElement, RHFTextFieldProps>(
  ({ name, helperText, type, ...other }, ref) => {
    const { control } = useFormContext();

    return (
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            fullWidth
            type={type}
            value={field.value || ''}
            error={!!error}
            helperText={error ? error?.message : helperText}
            {...other}
            ref={ref}
          />
        )}
      />
    );
  }
);

RHFTextField.displayName = 'RHFTextField';

export default RHFTextField;
