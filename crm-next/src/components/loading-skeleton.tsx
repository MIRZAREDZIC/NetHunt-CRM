'use client';

import { Skeleton, Box, Paper, Grid } from '@mui/material';
import { memo } from 'react';

interface LoadingSkeletonProps {
  variant?: 'form' | 'card' | 'list' | 'text';
  count?: number;
  height?: number | string;
  width?: number | string;
}

const LoadingSkeleton = memo(
  ({
    variant = 'text',
    count = 1,
    height = 40,
    width = '100%',
  }: LoadingSkeletonProps) => {
    const renderFormSkeleton = () => (
      <Paper elevation={0} sx={{ p: 4, borderRadius: 3 }}>
        <Box sx={{ mb: 4 }}>
          <Skeleton
            variant="circular"
            width={60}
            height={60}
            sx={{ mx: 'auto', mb: 2 }}
          />
          <Skeleton
            variant="text"
            width="50%"
            height={24}
            sx={{ mx: 'auto', mb: 1 }}
          />
          <Skeleton
            variant="text"
            width="70%"
            height={16}
            sx={{ mx: 'auto' }}
          />
        </Box>

        <Grid container spacing={3}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Skeleton variant="text" width="25%" height={14} sx={{ mb: 1 }} />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={48}
                sx={{ borderRadius: 1 }}
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <Skeleton variant="text" width="25%" height={14} sx={{ mb: 1 }} />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={80}
              sx={{ borderRadius: 1 }}
            />
          </Grid>

          <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
            <Skeleton
              variant="rectangular"
              width={160}
              height={40}
              sx={{ borderRadius: 2, mx: 'auto' }}
            />
          </Grid>
        </Grid>
      </Paper>
    );

    const renderCardSkeleton = () => (
      <Paper elevation={0} sx={{ p: 3, borderRadius: 3 }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={160}
          sx={{ borderRadius: 2, mb: 2 }}
        />
        <Skeleton variant="text" width="70%" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="50%" height={16} sx={{ mb: 2 }} />
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Skeleton
            variant="rectangular"
            width={60}
            height={24}
            sx={{ borderRadius: 1 }}
          />
          <Skeleton
            variant="rectangular"
            width={80}
            height={24}
            sx={{ borderRadius: 1 }}
          />
        </Box>
      </Paper>
    );

    const renderListSkeleton = () => (
      <Box>
        {Array.from({ length: count }).map((_, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              py: 2,
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              sx={{ mr: 2 }}
            />
            <Box sx={{ flex: 1 }}>
              <Skeleton
                variant="text"
                width="60%"
                height={18}
                sx={{ mb: 0.5 }}
              />
              <Skeleton variant="text" width="40%" height={14} />
            </Box>
            <Skeleton
              variant="rectangular"
              width={60}
              height={24}
              sx={{ borderRadius: 1 }}
            />
          </Box>
        ))}
      </Box>
    );

    const renderTextSkeleton = () => (
      <Box>
        {Array.from({ length: count }).map((_, index) => (
          <Skeleton
            key={index}
            variant="text"
            width={width}
            height={height}
            sx={{ mb: index < count - 1 ? 1 : 0 }}
          />
        ))}
      </Box>
    );

    switch (variant) {
      case 'form':
        return renderFormSkeleton();
      case 'card':
        return renderCardSkeleton();
      case 'list':
        return renderListSkeleton();
      default:
        return renderTextSkeleton();
    }
  }
);

LoadingSkeleton.displayName = 'LoadingSkeleton';

export default LoadingSkeleton;
