import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { LeadFormData } from '@/components/types/leads';
import { errorLogger } from '../utils/error-logger';
import { measureApiCall } from '../utils/performance';
import { leadsApi } from '@/api/leadsApi';

// Query Keys
const QUERY_KEYS = {
  LEADS: ['leads'] as const,
  LEAD: (id: string) => ['leads', id] as const,
};

// Custom Hooks
export const useGetLeads = (params?: {
  page?: number;
  limit?: number;
  status?: string;
  search?: string;
}) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.LEADS, params],
    queryFn: () =>
      measureApiCall('fetchLeads', () => leadsApi.fetchLeads(params)),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes cache time
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useGetLead = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.LEAD(id),
    queryFn: () => measureApiCall('fetchLead', () => leadsApi.fetchLead(id)),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
  });
};

export const useCreateLead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LeadFormData) =>
      measureApiCall('createLead', () => leadsApi.createLead(data)),
    onSuccess: (data, variables) => {
      // Optimistic update for better UX
      queryClient.setQueryData(QUERY_KEYS.LEADS, (old: any) => {
        if (!old) return [data];
        return [data, ...old];
      });

      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.LEADS });

      errorLogger.info('Lead capture mutation successful', {
        component: 'Hook',
        action: 'useCreateLead',
        extra: { companyName: variables.name },
      });
    },
    onError: (error, variables) => {
      errorLogger.logFormError(error, 'LeadForm', 'submission');
    },
    retry: false, // No retry for mutations to avoid duplicate submissions
  });
};

export const useUpdateLead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<LeadFormData> }) =>
      measureApiCall('updateLead', () => leadsApi.updateLead(id, data)),
    onSuccess: (data, variables) => {
      // Optimistic update
      queryClient.setQueryData(QUERY_KEYS.LEAD(variables.id), data);
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.LEADS });

      errorLogger.info('Lead update mutation successful', {
        component: 'Hook',
        action: 'useUpdateLead',
        extra: { leadId: variables.id },
      });
    },
    onError: (error, variables) => {
      errorLogger.logFormError(error, 'LeadForm', 'update');
    },
    retry: false,
  });
};

export const useDeleteLead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) =>
      measureApiCall('deleteLead', () => leadsApi.deleteLead(id)),
    onSuccess: (_, variables) => {
      // Remove from cache
      queryClient.setQueryData(QUERY_KEYS.LEADS, (old: any) => {
        if (!old) return [];
        return old.filter((lead: any) => lead.id !== variables);
      });

      // Remove individual lead cache
      queryClient.removeQueries({ queryKey: QUERY_KEYS.LEAD(variables) });

      errorLogger.info('Lead deletion mutation successful', {
        component: 'Hook',
        action: 'useDeleteLead',
        extra: { leadId: variables },
      });
    },
    onError: (error, variables) => {
      errorLogger.logFormError(error, 'LeadForm', 'delete');
    },
    retry: false,
  });
};
