<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SupplierCreateRequest extends FormRequest
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
            
            // Supplier Business Description (matching frontend field names)
            'productDescription' => 'required|string|max:1000',
            'exportExperience' => 'required|string|max:1000',
            'helpRequest' => 'required|string|max:1000',
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
            'productDescription.required' => 'Product description is required.',
            'exportExperience.required' => 'Export experience is required.',
            'helpRequest.required' => 'Help request description is required.',
        ];
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation()
    {
        // Map frontend field names to backend expected names
        $this->merge([
            'contact_type' => 'supplier',
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
            // Map supplier-specific fields
            'product_description' => $this->input('productDescription'),
            'export_experience' => $this->input('exportExperience'),
            'help_request' => $this->input('helpRequest'),
            // System fields
            'lead_source' => 'Website Form',
            'outreach' => 'Website Form',
            'label' => 'Supplier Request',
            'deal_name' => 'Supplier Request - ' . $this->input('companyName'),
            'description' => 'Products & Capacity: ' . $this->input('productDescription') . "\n" .
                           'Export Experience: ' . $this->input('exportExperience') . "\n" .
                           'Help Requested: ' . $this->input('helpRequest'),
        ]);
    }
} 