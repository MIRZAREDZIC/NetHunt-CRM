<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'resend' => [
        'key' => env('RESEND_KEY'),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

    'zapier' => [
        'webhook_url' => env('ZAPIER_WEBHOOK_URL'),
    ],

    'nethunt' => [
        'email' => env('NETHUNT_EMAIL'),
        'api_key' => env('NETHUNT_API_KEY'),
        'company_folder_id' => env('NETHUNT_COMPANY_FOLDER_ID', '68361151812a69255f0af0c6'),
        'contact_folder_id' => env('NETHUNT_CONTACT_FOLDER_ID', '68361151812a69255f0af0c3'),
        'deal_folder_id' => env('NETHUNT_DEAL_FOLDER_ID', '68361151812a69255f0af0c4'),
        'buyer_folder_id' => env('NETHUNT_BUYER_FOLDER_ID'),
        'supplier_folder_id' => env('NETHUNT_SUPPLIER_FOLDER_ID'),
    ],

    'nethunt_client' => [
        'email' => env('NETHUNT_EMAIL_2'),
        'api_key' => env('NETHUNT_API_KEY_2'),
        'company_folder_id' => env('NETHUNT_COMPANY_FOLDER_ID_2', '68361151812a69255f0af0c6'),
        'contact_folder_id' => env('NETHUNT_CONTACT_FOLDER_ID_2', '68361151812a69255f0af0c3'),
        'deal_folder_id' => env('NETHUNT_DEAL_FOLDER_ID_2', '68361151812a69255f0af0c4'),
    ],

];
