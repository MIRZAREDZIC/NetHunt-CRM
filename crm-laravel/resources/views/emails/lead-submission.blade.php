<!DOCTYPE html>
<html lang="sr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nova prijava</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 300;
        }
        .content {
            padding: 30px;
        }
        .lead-info {
            background-color: #f8f9fa;
            border-left: 4px solid #667eea;
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
        }
        .info-row {
            display: flex;
            margin-bottom: 15px;
            align-items: center;
        }
        .info-label {
            font-weight: 600;
            color: #495057;
            min-width: 150px;
            margin-right: 15px;
        }
        .info-value {
            color: #212529;
            flex: 1;
        }
        .priority-high, .priority-very-high {
            background-color: #fff5f5;
            border-left-color: #e53e3e;
        }
        .priority-medium {
            background-color: #fffbf0;
            border-left-color: #dd6b20;
        }
        .priority-low {
            background-color: #f0fff4;
            border-left-color: #38a169;
        }
        .supplier-section {
            background-color: #f0f9ff;
            border-left-color: #0ea5e9;
        }
        .buyer-section {
            background-color: #f0fdf4;
            border-left-color: #22c55e;
        }
        .footer {
            background-color: #f8f9fa;
            padding: 20px;
            text-align: center;
            color: #6c757d;
            font-size: 14px;
        }
        .badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
        }
        .badge-lead { background-color: #e3f2fd; color: #1976d2; }
        .badge-prospect { background-color: #f3e5f5; color: #7b1fa2; }
        .badge-client { background-color: #e8f5e8; color: #388e3c; }
        .badge-partner { background-color: #fff3e0; color: #f57c00; }
        .badge-supplier { background-color: #e0f2fe; color: #0277bd; }
        .badge-buyer { background-color: #e8f5e8; color: #2e7d32; }
        
        @media (max-width: 600px) {
            .info-row {
                flex-direction: column;
                align-items: flex-start;
            }
            .info-label {
                min-width: auto;
                margin-bottom: 5px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            @if(isset($leadData['contact_type']) && in_array(strtolower($leadData['contact_type']), ['supplier', 'buyer']))
                <h1>🚀 Nova {{ ucfirst(strtolower($leadData['contact_type'])) }} prijava</h1>
                <p>Stigla je nova {{ strtolower($leadData['contact_type']) }} prijava kroz CRM sistem</p>
            @else
                <h1>🚀 Nova prijava</h1>
                <p>Stigla je nova prijava kroz CRM sistem</p>
            @endif
        </div>
        
        <div class="content">
            <div class="lead-info {{ isset($leadData['deal_priority']) ? 'priority-' . strtolower(str_replace(' ', '-', $leadData['deal_priority'])) : '' }} {{ isset($leadData['contact_type']) && strtolower($leadData['contact_type']) == 'supplier' ? 'supplier-section' : '' }} {{ isset($leadData['contact_type']) && strtolower($leadData['contact_type']) == 'buyer' ? 'buyer-section' : '' }}">
                <h2 style="margin-top: 0; color: #495057;">📋 Osnovne informacije</h2>
                
                <div class="info-row">
                    <span class="info-label">Kompanija:</span>
                    <span class="info-value"><strong>{{ $leadData['name'] }}</strong></span>
                </div>
                
                <div class="info-row">
                    <span class="info-label">Status:</span>
                    <span class="info-value">
                        <span class="badge badge-{{ isset($leadData['contact_type']) ? strtolower($leadData['contact_type']) : 'lead' }}">
                            {{ $leadData['status'] ?? ($leadData['contact_type'] ?? 'Lead') }}
                        </span>
                    </span>
                </div>
                
                @if(isset($leadData['contact_type']) && $leadData['contact_type'])
                <div class="info-row">
                    <span class="info-label">Tip kontakta:</span>
                    <span class="info-value">{{ ucfirst($leadData['contact_type']) }}</span>
                </div>
                @endif
                
                @if(isset($leadData['industry']) && $leadData['industry'])
                <div class="info-row">
                    <span class="info-label">Industrija:</span>
                    <span class="info-value">{{ $leadData['industry'] }}</span>
                </div>
                @endif
                
                @if(isset($leadData['company_size']) && $leadData['company_size'])
                <div class="info-row">
                    <span class="info-label">Veličina kompanije:</span>
                    <span class="info-value">{{ $leadData['company_size'] }}</span>
                </div>
                @endif
                
                @if(isset($leadData['lead_source']) && $leadData['lead_source'])
                <div class="info-row">
                    <span class="info-label">Izvor:</span>
                    <span class="info-value">{{ $leadData['lead_source'] }}</span>
                </div>
                @endif
            </div>
            
            <div class="lead-info">
                <h2 style="margin-top: 0; color: #495057;">👤 Kontakt informacije</h2>
                
                <div class="info-row">
                    <span class="info-label">Menadžer/Kontakt:</span>
                    <span class="info-value"><strong>{{ $leadData['manager'] }}</strong></span>
                </div>
                
                <div class="info-row">
                    <span class="info-label">Email:</span>
                    <span class="info-value">
                        <a href="mailto:{{ $leadData['contact_email'] ?? $leadData['email'] }}" style="color: #667eea; text-decoration: none;">
                            {{ $leadData['contact_email'] ?? $leadData['email'] }}
                        </a>
                    </span>
                </div>
                
                @if((isset($leadData['contact_phone']) && $leadData['contact_phone']) || (isset($leadData['phone']) && $leadData['phone']))
                <div class="info-row">
                    <span class="info-label">Telefon:</span>
                    <span class="info-value">
                        <a href="tel:{{ $leadData['contact_phone'] ?? $leadData['phone'] }}" style="color: #667eea; text-decoration: none;">
                            {{ $leadData['contact_phone'] ?? $leadData['phone'] }}
                        </a>
                    </span>
                </div>
                @endif
                
                @if(isset($leadData['position']) && $leadData['position'])
                <div class="info-row">
                    <span class="info-label">Pozicija:</span>
                    <span class="info-value">{{ $leadData['position'] }}</span>
                </div>
                @endif
                
                @if(isset($leadData['website']) && $leadData['website'])
                <div class="info-row">
                    <span class="info-label">Website:</span>
                    <span class="info-value">
                        <a href="{{ $leadData['website'] }}" target="_blank" style="color: #667eea; text-decoration: none;">
                            {{ $leadData['website'] }}
                        </a>
                    </span>
                </div>
                @endif
                
                @if(isset($leadData['address']) && $leadData['address'])
                <div class="info-row">
                    <span class="info-label">Adresa:</span>
                    <span class="info-value">{{ $leadData['address'] }}</span>
                </div>
                @endif
                
                @if(isset($leadData['preferred_contact_method']) && $leadData['preferred_contact_method'])
                <div class="info-row">
                    <span class="info-label">Preferirani kontakt:</span>
                    <span class="info-value">{{ $leadData['preferred_contact_method'] }}</span>
                </div>
                @endif
            </div>
            
            {{-- Supplier specific information --}}
            @if(isset($leadData['contact_type']) && strtolower($leadData['contact_type']) == 'supplier')
            <div class="lead-info supplier-section">
                <h2 style="margin-top: 0; color: #495057;">🏭 Supplier informacije</h2>
                
                @if(isset($leadData['product_description']) && $leadData['product_description'])
                <div class="info-row">
                    <span class="info-label">Opis proizvoda:</span>
                    <span class="info-value">{{ $leadData['product_description'] }}</span>
                </div>
                @endif
                
                @if(isset($leadData['export_experience']) && $leadData['export_experience'])
                <div class="info-row">
                    <span class="info-label">Izvozno iskustvo:</span>
                    <span class="info-value">{{ $leadData['export_experience'] }}</span>
                </div>
                @endif
                
                @if(isset($leadData['export_countries']) && $leadData['export_countries'])
                <div class="info-row">
                    <span class="info-label">Zemlje izvoza:</span>
                    <span class="info-value">{{ $leadData['export_countries'] }}</span>
                </div>
                @endif
                
                @if(isset($leadData['help_request']) && $leadData['help_request'])
                <div class="info-row">
                    <span class="info-label">Zahtev za pomoć:</span>
                    <span class="info-value">{{ $leadData['help_request'] }}</span>
                </div>
                @endif
            </div>
            @endif
            
            {{-- Buyer specific information --}}
            @if(isset($leadData['contact_type']) && strtolower($leadData['contact_type']) == 'buyer')
            <div class="lead-info buyer-section">
                <h2 style="margin-top: 0; color: #495057;">🛒 Buyer informacije</h2>
                
                @if(isset($leadData['product_interest']) && $leadData['product_interest'])
                <div class="info-row">
                    <span class="info-label">Interesovanje za proizvode:</span>
                    <span class="info-value">{{ $leadData['product_interest'] }}</span>
                </div>
                @endif
                
                @if(isset($leadData['request_description']) && $leadData['request_description'])
                <div class="info-row">
                    <span class="info-label">Opis zahteva:</span>
                    <span class="info-value">{{ $leadData['request_description'] }}</span>
                </div>
                @endif
                
                @if(isset($leadData['requested_quantities']) && $leadData['requested_quantities'])
                <div class="info-row">
                    <span class="info-label">Potrebne količine:</span>
                    <span class="info-value">{{ $leadData['requested_quantities'] }}</span>
                </div>
                @endif
                
                @if(isset($leadData['urgency']) && $leadData['urgency'])
                <div class="info-row">
                    <span class="info-label">Hitnost:</span>
                    <span class="info-value">
                        <span class="badge badge-{{ strtolower(str_replace(' ', '-', $leadData['urgency'])) }}">
                            {{ $leadData['urgency'] }}
                        </span>
                    </span>
                </div>
                @endif
            </div>
            @endif
            
            @if(isset($leadData['budget_range']) || isset($leadData['timeline']) || isset($leadData['deal_priority']))
            <div class="lead-info">
                <h2 style="margin-top: 0; color: #495057;">💼 Poslovne informacije</h2>
                
                @if(isset($leadData['budget_range']) && $leadData['budget_range'])
                <div class="info-row">
                    <span class="info-label">Budžet:</span>
                    <span class="info-value">{{ $leadData['budget_range'] }}</span>
                </div>
                @endif
                
                @if(isset($leadData['timeline']) && $leadData['timeline'])
                <div class="info-row">
                    <span class="info-label">Vremenski okvir:</span>
                    <span class="info-value">{{ $leadData['timeline'] }}</span>
                </div>
                @endif
                
                @if(isset($leadData['deal_priority']) && $leadData['deal_priority'])
                <div class="info-row">
                    <span class="info-label">Prioritet:</span>
                    <span class="info-value">
                        <span class="badge badge-{{ strtolower(str_replace(' ', '-', $leadData['deal_priority'])) }}">
                            {{ $leadData['deal_priority'] }}
                        </span>
                    </span>
                </div>
                @endif
                
                @if(isset($leadData['service_interest']) && $leadData['service_interest'])
                <div class="info-row">
                    <span class="info-label">Interesovanje za usluge:</span>
                    <span class="info-value">{{ $leadData['service_interest'] }}</span>
                </div>
                @endif
            </div>
            @endif
            
            <div style="text-align: center; margin-top: 30px;">
                <p style="color: #6c757d; font-size: 14px;">
                    📅 Prijava stigla: {{ date('d.m.Y H:i') }}
                </p>
            </div>
        </div>
        
        <div class="footer">
            <p>Ova poruka je automatski generisana iz CRM sistema.</p>
            <p>Za dodatne informacije, kontaktirajte administratora sistema.</p>
        </div>
    </div>
</body>
</html> 