<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Mail\LeadSubmissionMail;

class TestEmailCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'email:test {email? : Email address to send test to} {--type=lead : Type of test email (lead, supplier, buyer)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test email functionality by sending a sample lead notification';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $email = $this->argument('email') ?? config('mail.notification_email') ?? env('MAIL_NOTIFICATION_EMAIL');
        $type = $this->option('type');
        
        if (!$email) {
            $this->error('No email address provided. Please provide an email as argument or set MAIL_NOTIFICATION_EMAIL in .env');
            return 1;
        }

        $this->info("Testing email functionality...");
        $this->info("Sending test {$type} email to: {$email}");

        // Get test data based on type
        $testData = $this->getTestData($type);

        try {
            Mail::to($email)->send(new LeadSubmissionMail($testData));
            
            $this->info("✅ Test {$type} email sent successfully!");
            $this->info("Check your inbox at: {$email}");
            $this->info("If you don't see the email, check your spam folder.");
            
            return 0;
        } catch (\Exception $e) {
            $this->error("❌ Failed to send test email: " . $e->getMessage());
            return 1;
        }
    }

    private function getTestData($type)
    {
        switch ($type) {
            case 'supplier':
                return [
                    'name' => 'Test Supplier Company d.o.o.',
                    'status' => 'New Lead',
                    'lead_source' => 'Website Form',
                    'company_size' => '11-50',
                    'industry' => 'Manufacturing',
                    'manager' => 'Marko Petrović',
                    'contact_email' => 'marko.petrovic@testsupplier.rs',
                    'contact_phone' => '+381 11 123 4567',
                    'website' => 'https://testsupplier.rs',
                    'position' => 'Export Manager',
                    'address' => 'Industrijska zona bb, Novi Sad',
                    'contact_type' => 'Supplier',
                    'outreach' => 'Website Form',
                    'label' => 'Supplier Registration',
                    
                    // Supplier-specific fields
                    'product_description' => 'Proizvodimo visokokvalitetne metalne komponente za automobilsku industriju. Naša proizvodnja uključuje CNC obradu, zavarivanje i površinsku obradu metala.',
                    'export_experience' => 'Da, izvozimo u Nemačku, Austriju i Italiju već 5 godina. Imamo sertifikate ISO 9001 i TS 16949.',
                    'help_request' => 'Tražimo pomoć u pronalaženju novih kupaca u EU tržištu, posebno u Francuskoj i Španiji. Potrebna nam je podrška u marketingu i uspostavljanju poslovnih kontakata.',
                    'export_countries' => 'Germany, Austria, Italy',
                    
                    // Deal data
                    'deal_name' => 'Supplier Registration - Test Supplier Company d.o.o.',
                    'description' => 'Products: Visokokvalitetne metalne komponente\nExport Experience: 5 godina izvoza u EU\nHelp Request: Proširenje na nova tržišta'
                ];

            case 'buyer':
                return [
                    'name' => 'Test Buyer Corporation Ltd.',
                    'status' => 'New Lead',
                    'lead_source' => 'Website Form',
                    'company_size' => '201-500',
                    'industry' => 'Retail',
                    'manager' => 'Ana Jovanović',
                    'contact_email' => 'ana.jovanovic@testbuyer.com',
                    'contact_phone' => '+381 21 987 6543',
                    'website' => 'https://testbuyer.com',
                    'position' => 'Procurement Manager',
                    'address' => 'Bulevar Oslobođenja 123, Beograd',
                    'contact_type' => 'Buyer',
                    'outreach' => 'Website Form',
                    'label' => 'Buyer Request',
                    
                    // Buyer-specific fields
                    'product_interest' => 'Organska hrana i prirodni proizvodi za našu maloprodajnu mrežu',
                    'request_description' => 'Tražimo pouzdane dobavljače organskih prehrambenih proizvoda. Potrebni su nam sertifikovani organski proizvodi sa dugim rokom trajanja, pogodni za maloprodaju.',
                    'budget_range' => '$50K-$100K',
                    'requested_quantities' => '500-1000 jedinica mesečno po proizvodu',
                    'timeline' => '3 months',
                    'urgency' => 'High',
                    'deal_priority' => 'High',
                    'specific_needs' => 'Organski sertifikovani proizvodi sa dugim rokom trajanja',
                    
                    // Deal data
                    'deal_name' => 'Buyer Request - Test Buyer Corporation Ltd.',
                    'description' => 'Product Interest: Organska hrana\nRequest: Pouzdani dobavljači organskih proizvoda\nBudget: $50K-$100K\nQuantities: 500-1000 jedinica mesečno\nTimeline: 3 months\nUrgency: High'
                ];

            default: // lead
                return [
                    'name' => 'Test Company d.o.o.',
                    'status' => 'Lead',
                    'lead_source' => 'Website',
                    'company_size' => '11-50',
                    'industry' => 'IT Services',
                    'manager' => 'Marko Petrović',
                    'email' => 'marko.petrovic@testcompany.rs',
                    'phone' => '+381 11 123 4567',
                    'website' => 'https://testcompany.rs',
                    'position' => 'CEO',
                    'address' => 'Knez Mihailova 42, Beograd',
                    'budget_range' => '$10K-$50K',
                    'timeline' => '1-3 months',
                    'specific_needs' => 'Potreban nam je CRM sistem za upravljanje klijentima i automatizaciju prodajnih procesa.',
                    'description' => 'Kompanija se bavi IT uslugama i traži rešenje za bolje upravljanje klijentima.',
                    'preferred_contact_method' => 'Email',
                    'deal_priority' => 'High',
                    'service_interest' => 'CRM Implementation',
                    'current_challenges' => 'Ručno praćenje klijenata, nedostatak automatizacije',
                    'decision_maker' => 'Marko Petrović',
                    'company_goals' => 'Povećanje efikasnosti prodajnog tima za 30% u narednih 6 meseci'
                ];
        }
    }
} 