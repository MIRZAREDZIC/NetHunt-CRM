import { internalApiInstance } from '@/utils/axiosInstance';
import { LeadFormData } from '@/components/types/leads';

// API service for leads using axios
export const leadsApi = {
  // Fetch all leads with optional parameters
  fetchLeads: async (params?: {
    page?: number;
    limit?: number;
    status?: string;
    search?: string;
  }) => {
    const queryParams = new URLSearchParams();

    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.status) queryParams.append('status', params.status);
    if (params?.search) queryParams.append('search', params.search);

    const url = `/api/leads${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;

    const response = await internalApiInstance.get(url);
    return response.data;
  },

  // Fetch single lead by ID
  fetchLead: async (id: string) => {
    const response = await internalApiInstance.get(`/api/leads?id=${id}`);
    return response.data;
  },

  // Create new lead (general - will auto-route based on contact_type)
  createLead: async (data: LeadFormData) => {
    const response = await internalApiInstance.post('/api/leads', data);
    return response.data;
  },

  // Create buyer lead specifically
  createBuyerLead: async (data: any) => {
    const response = await internalApiInstance.post('/api/leads/buyer', data);
    return response.data;
  },

  // Create supplier lead specifically
  createSupplierLead: async (data: any) => {
    const response = await internalApiInstance.post(
      '/api/leads/supplier',
      data
    );
    return response.data;
  },

  // Update existing lead
  updateLead: async (id: string, data: Partial<LeadFormData>) => {
    const response = await internalApiInstance.put(`/api/leads?id=${id}`, data);
    return response.data;
  },

  // Delete lead
  deleteLead: async (id: string) => {
    const response = await internalApiInstance.delete(`/api/leads?id=${id}`);
    return response.data;
  },
};
