import { forwardRef } from 'react';
import { TextField, TextFieldProps, MenuItem } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export interface RHFSelectProps extends Omit<TextFieldProps, 'name'> {
  name: string;
  options: Array<{ value: string; label: string }>;
}

const RHFSelect = forwardRef<HTMLDivElement, RHFSelectProps>(
  ({ name, helperText, options, ...other }, ref) => {
    const { control } = useFormContext();

    return (
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            select
            fullWidth
            value={field.value || ''}
            error={!!error}
            helperText={error ? error?.message : helperText}
            {...other}
            ref={ref}
          >
            {options.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    );
  }
);

RHFSelect.displayName = 'RHFSelect';

export default RHFSelect;
