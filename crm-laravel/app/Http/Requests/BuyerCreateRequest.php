<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BuyerCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // Company Details (matching frontend field names)
            'companyName' => 'required|string|max:255',
            'companyAddress' => 'required|string|max:500', // address/website
            'companyContact' => 'required|string|max:50',
            'companyEmail' => 'required|email|max:255',
            'companySize' => 'required|string|in:1-10,11-50,51-200,201-500,500+',
            'industry' => 'required|string|max:100',
            
            // Contact Person Details (matching frontend field names)
            'firstName' => 'required|string|max:100',
            'lastName' => 'required|string|max:100',
            'position' => 'required|string|max:100',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:50',
            
            // Buyer Requirements (matching frontend field names)
            'productInterest' => 'required|string|max:500',
            'requestDescription' => 'required|string|max:1000',
            'budgetRange' => 'required|string|in:Under $10K,$10K-$50K,$50K-$100K,$100K-$500K,Over $500K,Not sure',
            'requestedQuantities' => 'required|string|max:200',
            'timeline' => 'required|string|in:1 week,2 weeks,1 month,3 months,6 months,1 year',
            'urgency' => 'required|string|in:Very High,High,Medium,Low',
        ];
    }

    /**
     * Get custom error messages for validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'companyName.required' => 'Company name is required.',
            'companyAddress.required' => 'Company address/website is required.',
            'companyContact.required' => 'Company contact is required.',
            'companyEmail.required' => 'Company email is required.',
            'companyEmail.email' => 'Please provide a valid company email address.',
            'companySize.required' => 'Company size is required.',
            'companySize.in' => 'Please select a valid company size.',
            'industry.required' => 'Industry is required.',
            'firstName.required' => 'First name is required.',
            'lastName.required' => 'Last name is required.',
            'position.required' => 'Position is required.',
            'email.required' => 'Email is required.',
            'email.email' => 'Please provide a valid email address.',
            'phone.required' => 'Phone number is required.',
            'productInterest.required' => 'Product interest is required.',
            'requestDescription.required' => 'Request description is required.',
            'budgetRange.required' => 'Budget range is required.',
            'budgetRange.in' => 'Please select a valid budget range.',
            'requestedQuantities.required' => 'Requested quantities is required.',
            'timeline.required' => 'Timeline is required.',
            'timeline.in' => 'Please select a valid timeline.',
            'urgency.required' => 'Urgency level is required.',
            'urgency.in' => 'Please select a valid urgency level.',
        ];
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation()
    {
        // Map frontend field names to backend expected names
        $this->merge([
            'contact_type' => 'buyer',
            // Map company fields
            'name' => $this->input('companyName'),
            'address' => $this->input('companyAddress'),
            'website' => $this->input('companyAddress'), // frontend sends address/website in same field
            'phone' => $this->input('companyContact'),
            'company_email' => $this->input('companyEmail'),
            'company_size' => $this->input('companySize'),
            // Map contact person fields
            'manager' => $this->input('firstName') . ' ' . $this->input('lastName'),
            'first_name' => $this->input('firstName'),
            'last_name' => $this->input('lastName'),
            'contact_email' => $this->input('email'),
            'contact_phone' => $this->input('phone'),
            // Map buyer-specific fields
            'product_interest' => $this->input('productInterest'),
            'request_description' => $this->input('requestDescription'),
            'budget_range' => $this->input('budgetRange'),
            'requested_quantities' => $this->input('requestedQuantities'),
            // System fields
            'lead_source' => 'Website Form',
            'outreach' => 'Website Form',
            'label' => 'Buyer Request',
            'deal_name' => 'Buyer Request - ' . $this->input('companyName'),
            'description' => 'Product Interest: ' . $this->input('productInterest') . "\n" .
                           'Request: ' . $this->input('requestDescription') . "\n" .
                           'Budget: ' . $this->input('budgetRange') . "\n" .
                           'Quantities: ' . $this->input('requestedQuantities') . "\n" .
                           'Timeline: ' . $this->input('timeline') . "\n" .
                           'Urgency: ' . $this->input('urgency'),
        ]);
    }
} 