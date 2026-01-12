// Lead Types
export type Lead = {
  id: string;
  name: string;
  status: LeadStatus;
  lead_source?: string;
  company_size?: string;
  industry?: string;
  manager?: string;
  email?: string;
  phone?: string;
  website?: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
};

export type LeadFormData = {
  name: string;
  status: string;
  lead_source: string;
  company_size: string;
  industry: string;
  manager: string;
  email: string;
  phone: string;
  website: string;
  description?: string;
  position?: string;
  address?: string;
  budget_range?: string;
  timeline?: string;
  specific_needs?: string;
  // New fields for better CRM integration
  preferred_contact_method?: string;
  deal_priority?: string;
  service_interest?: string;
  current_challenges?: string;
  decision_maker?: string;
  company_goals?: string;
};

export type LeadStatus = 'Lead' | 'Prospect' | 'Client' | 'Partner';

// Filter Types
export type LeadFilters = {
  status?: LeadStatus[];
  industry?: string[];
  company_size?: string[];
  lead_source?: string[];
};

// API Response Types
export type LeadListResponse = {
  data: Lead[];
  total: number;
  page: number;
  per_page: number;
};

export type LeadResponse = {
  data: Lead;
};

// Option Types for Select Components
export type SelectOption = {
  value: string;
  label: string;
};

// Form Options
export const statusOptions = [
  { value: 'Lead', label: 'Lead' },
  { value: 'Prospect', label: 'Prospect' },
  { value: 'Client', label: 'Client' },
  { value: 'Partner', label: 'Partner' },
];

export const companySizeOptions = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-500', label: '201-500 employees' },
  { value: '501+', label: '500+ employees' },
];

export const leadSourceOptions = [
  { value: 'Website', label: 'Website' },
  { value: 'Email', label: 'Email' },
  { value: 'Social Media', label: 'Social Media' },
  { value: 'Referral', label: 'Referral' },
  { value: 'Event', label: 'Event' },
  { value: 'Call', label: 'Cold Call' },
];

export const industryOptions = [
  { value: 'Technology', label: 'Technology' },
  { value: 'Healthcare', label: 'Healthcare' },
  { value: 'Finance', label: 'Finance' },
  { value: 'Education', label: 'Education' },
  { value: 'Manufacturing', label: 'Manufacturing' },
  { value: 'Retail', label: 'Retail' },
  { value: 'Real Estate', label: 'Real Estate' },
  { value: 'Consulting', label: 'Consulting' },
  { value: 'Other', label: 'Other' },
];

export const budgetRangeOptions = [
  { value: 'Under $10K', label: 'Under $10K' },
  { value: '$10K-$50K', label: '$10K-$50K' },
  { value: '$50K-$100K', label: '$50K-$100K' },
  { value: '$100K-$500K', label: '$100K-$500K' },
  { value: 'Over $500K', label: 'Over $500K' },
  { value: 'Not sure', label: 'Not sure' },
];

export const timelineOptions = [
  { value: 'Immediate', label: 'Immediate (within 1 month)' },
  { value: '1-3 months', label: '1-3 months' },
  { value: '3-6 months', label: '3-6 months' },
  { value: '6-12 months', label: '6-12 months' },
  { value: 'Over 1 year', label: 'Over 1 year' },
  { value: 'Just exploring', label: 'Just exploring' },
];

export const contactMethodOptions = [
  { value: 'Email', label: 'Email' },
  { value: 'Phone', label: 'Phone' },
  { value: 'Video Call', label: 'Video Call' },
  { value: 'In Person', label: 'In Person' },
];

export const dealPriorityOptions = [
  { value: 'High', label: 'High Priority' },
  { value: 'Medium', label: 'Medium Priority' },
  { value: 'Low', label: 'Low Priority' },
];

export const serviceInterestOptions: SelectOption[] = [
  { value: 'CRM Implementation', label: 'CRM Implementation' },
  { value: 'Sales Automation', label: 'Sales Automation' },
  { value: 'Marketing Automation', label: 'Marketing Automation' },
  { value: 'Customer Support', label: 'Customer Support Solutions' },
  { value: 'Data Analytics', label: 'Data Analytics & Reporting' },
  { value: 'Integration Services', label: 'System Integration' },
  { value: 'Training & Consulting', label: 'Training & Consulting' },
  { value: 'Custom Development', label: 'Custom Development' },
  { value: 'Other', label: 'Other Services' },
];
