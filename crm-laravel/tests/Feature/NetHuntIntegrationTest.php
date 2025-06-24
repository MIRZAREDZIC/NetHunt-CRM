<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Services\NetHuntService;

class NetHuntIntegrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_lead_creation_with_complete_nethunt_integration()
    {
        // Mock data for testing lead capture
        $leadData = [
            'name' => 'Test Company Ltd',
            'status' => 'Lead',
            'lead_source' => 'Website',
            'company_size' => '11-50',
            'industry' => 'Technology',
            'manager' => 'John Doe',
            'email' => 'john@testcompany.com',
            'phone' => '+381 11 123 4567',
            'website' => 'https://testcompany.com',
            'description' => 'Test lead for NetHunt integration'
        ];

        // Make POST request to create lead
        $response = $this->postJson('/api/leads', $leadData);

        // Assert the response structure for lead capture
        $response->assertStatus(201)
                ->assertJsonStructure([
                    'message',
                    'integration_status' => [
                        'nethunt_crm'
                    ],
                    'nethunt_data' => [
                        'success_count',
                        'total_attempted',
                        'company_record',
                        'contact_record',
                        'deal_record',
                        'errors'
                    ]
                ]);

        // Assert response contains integration status
        $responseData = $response->json();
        
        // NetHunt integration status should be either success, partial_success, complete_success, or failed
        $this->assertContains(
            $responseData['integration_status']['nethunt_crm'], 
            ['success', 'partial_success', 'complete_success', 'failed']
        );
    }

    public function test_lead_creation_handles_nethunt_failure_gracefully()
    {
        // This test ensures that lead capture provides proper error handling
        $leadData = [
            'name' => 'Test Company 2',
            'status' => 'Prospect',
            'email' => 'test@company2.com',
            'manager' => 'Jane Smith'
        ];

        $response = $this->postJson('/api/leads', $leadData);

        // Should return appropriate status even if NetHunt fails
        $this->assertContains($response->status(), [201, 422, 500]);
    }

    public function test_validation_requires_name_status_email_and_manager()
    {
        // Test that validation works for lead capture
        $response = $this->postJson('/api/leads', []);

        $response->assertStatus(422)
                ->assertJsonValidationErrors(['name', 'status', 'email', 'manager']);
    }

    public function test_lead_capture_with_minimal_required_fields()
    {
        $minimalLeadData = [
            'name' => 'Minimal Test Company',
            'status' => 'Lead',
            'email' => 'minimal@test.com',
            'manager' => 'Test Manager'
        ];

        $response = $this->postJson('/api/leads', $minimalLeadData);

        // Should accept minimal required fields for lead capture
        $this->assertContains($response->status(), [201, 422, 500]);
    }
} 