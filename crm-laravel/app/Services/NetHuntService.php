<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Mail\LeadSubmissionMail;

class NetHuntService
{
    protected $baseUrl = 'https://nethunt.com/api/v1';
    protected $email;
    protected $apiKey;

    public function __construct()
    {
        $this->email = config('services.nethunt.email');
        $this->apiKey = config('services.nethunt.api_key');
    }

    public function processBuyerLead(array $validated): array
    {
        $result = $this->createCompleteLeadRecords($validated, 'buyer');

        if ($result['success']) {
            $this->sendEmailNotification($validated, 'buyer');
        }

        return $result;
    }

    public function processSupplierLead(array $validated): array
    {
        $result = $this->createCompleteLeadRecords($validated, 'supplier');

        if ($result['success']) {
            $this->sendEmailNotification($validated, 'supplier');
        }

        return $result;
    }

    private function sendEmailNotification(array $validated, string $contactType): void
    {
        try {
            $notificationEmail = config('mail.notification_email', env('MAIL_NOTIFICATION_EMAIL'));
            
            if (!$notificationEmail) {
                return;
            }

            $emailData = [
                'name' => $validated['companyName'],
                'companyName' => $validated['companyName'],
                'contact_type' => $contactType,
                'status' => 'New Lead',
                'industry' => $validated['industry'],
                'company_size' => $validated['companySize'],
                'lead_source' => 'Website Form',
                'manager' => $validated['firstName'] . ' ' . $validated['lastName'],
                'email' => $validated['email'],
                'phone' => $validated['phone'],
                'position' => $validated['position'],
                'address' => $validated['companyAddress'],
            ];

            if ($contactType === 'buyer') {
                $emailData = array_merge($emailData, [
                    'product_interest' => $validated['productInterest'],
                    'budget_range' => $validated['budgetRange'],
                    'timeline' => $validated['timeline'],
                    'requested_quantities' => $validated['requestedQuantities'],
                    'deal_priority' => $validated['urgency'],
                    'specific_needs' => $validated['requestDescription'],
                ]);
            } else {
                $emailData = array_merge($emailData, [
                    'product_description' => $validated['productDescription'],
                    'export_experience' => $validated['exportExperience'],
                    'help_request' => $validated['helpRequest'],
                ]);
            }
            
            Mail::to($notificationEmail)->send(new LeadSubmissionMail($emailData));
            
        } catch (\Exception $e) {
            Log::error('Email notification failed', [
                'error' => $e->getMessage(),
                'contact_type' => $contactType
            ]);
        }
    }

    private function createCompleteLeadRecords(array $validated, string $contactType): array
    {
        try {
            $companyResponse = $this->createCompany([
                'name' => $validated['companyName'],
                'website' => $validated['companyAddress'],
                'email' => $validated['companyEmail'],
                'phone' => $validated['companyContact'],
                'company_size' => $validated['companySize'],
                'industry' => $validated['industry'],
            ]);
            
            $companyRecordId = $companyResponse['recordId'] ?? $companyResponse['id'] ?? $companyResponse['record_id'];
            
            $contactResponse = $this->createContact([
                'name' => $validated['firstName'] . ' ' . $validated['lastName'],
                'first_name' => $validated['firstName'],
                'last_name' => $validated['lastName'],
                'email' => $validated['email'],
                'phone' => $validated['phone'],
                'position' => $validated['position'],
            ], $companyRecordId);
            
            $contactRecordId = $contactResponse['recordId'] ?? $contactResponse['id'] ?? $contactResponse['record_id'];

            $dealResponse = $this->createDeal([
                'name' => $validated['companyName'],
                'budget_range' => $validated['budgetRange'] ?? null,
            ], $companyRecordId, $contactRecordId);
            
            $dealRecordId = $dealResponse['recordId'] ?? $dealResponse['id'] ?? $dealResponse['record_id'];

            if ($contactType === 'buyer') {
                $specificResponse = $this->createBuyerRecord([
                    'name' => $validated['companyName'],
                    'product_interest' => $validated['productInterest'],
                    'budget_range' => $validated['budgetRange'],
                    'timeline' => $validated['timeline'],
                    'requested_quantities' => $validated['requestedQuantities'],
                    'urgency' => $validated['urgency'],
                    'specific_needs' => $validated['requestDescription'],
                ]);
            } else {
                $specificResponse = $this->createSupplierRecord([
                    'name' => $validated['companyName'],
                    'product_description' => $validated['productDescription'],
                    'export_experience' => $validated['exportExperience'],
                    'help_request' => $validated['helpRequest'],
                ]);
            }
            
            $specificRecordId = $specificResponse['recordId'] ?? $specificResponse['id'] ?? $specificResponse['record_id'];

            return [
                'success' => true,
                'message' => ucfirst($contactType) . ' lead created successfully in NetHunt CRM',
                'record_ids' => [
                    'company' => $companyRecordId,
                    'contact' => $contactRecordId,
                    'deal' => $dealRecordId,
                    $contactType => $specificRecordId
                ]
            ];
            
        } catch (\Exception $e) {
            Log::error("CRM record creation failed", [
                'error' => $e->getMessage(),
                'contact_type' => $contactType,
                'company' => $validated['companyName']
            ]);
            
            return [
                'success' => false,
                'message' => 'Failed to create lead in NetHunt CRM',
                'error' => $e->getMessage()
            ];
        }
    }

    private function makeNetHuntRequest(string $folderId, array $data)
    {
        $url = $this->baseUrl . '/zapier/actions/create-record/' . $folderId;
        
        $response = Http::withHeaders([
            'Authorization' => 'Basic ' . base64_encode($this->email . ':' . $this->apiKey),
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->timeout(30)->post($url, [
            'timeZone' => 'Europe/Belgrade',
            'fields' => array_filter($data, fn($value) => $value !== null && $value !== '')
        ]);

        if (!$response->successful()) {
            throw new \Exception('NetHunt API error: ' . $response->status());
        }

        return $response->json();
    }

    private function createCompany(array $data)
    {
        return $this->makeNetHuntRequest('68361151812a69255f0af0c6', [
            'Name' => $data['name'],
            'Company size' => $data['company_size'],
            'Industry' => [$data['industry']],
            'Email' => [$data['email']],
            'Phone number' => [$data['phone']],
            'Website' => $data['website'],
        ]);
    }

    private function createContact(array $data, $companyRecordId)
    {
        return $this->makeNetHuntRequest(config('services.nethunt.contact_folder_id'), [
            'Name' => $data['name'],
            'First name' => $data['first_name'],
            'Last name' => $data['last_name'],
            'Company' => [$companyRecordId],
            'Email' => [$data['email']],
            'Phone number' => [$data['phone']],
        ]);
    }

    private function createDeal(array $data, $companyRecordId, $contactRecordId)
    {
        $dealAmount = match($data['budget_range'] ?? '') {
            'Under $10K' => 5000,
            '$10K-$50K' => 30000,
            '$50K-$100K' => 75000,
            '$100K-$500K' => 300000,
            '$500K+' => 750000,
            default => null
        };

        $fields = [
            'Name' => $data['name'],
            'Company' => [$companyRecordId],
            'Contact person' => [$contactRecordId],
        ];

        if ($dealAmount) {
            $fields['Deal amount'] = $dealAmount;
        }

        return $this->makeNetHuntRequest(config('services.nethunt.deal_folder_id'), $fields);
    }

    private function createBuyerRecord(array $data)
    {
        return $this->makeNetHuntRequest(config('services.nethunt.buyer_folder_id'), [
            'Name' => $data['name'],
            'Product Interest' => $data['product_interest'],
            'Budget Range' => $data['budget_range'],
            'Timeline' => $data['timeline'],
            'Requested Quantities' => $data['requested_quantities'],
            'Urgency Level' => $data['urgency'],
            'Specific Needs' => $data['specific_needs'],
        ]);
    }

    private function createSupplierRecord(array $data)
    {
        return $this->makeNetHuntRequest(config('services.nethunt.supplier_folder_id'), [
            'Name' => $data['name'],
            'Product Description' => $data['product_description'],
            'Export Experience' => $data['export_experience'],
            'Help Request' => $data['help_request'],
        ]);
    }
} 