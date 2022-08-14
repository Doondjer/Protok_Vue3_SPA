<?php

return [
    'values' => [
     //   'favicon_url' => '/favicon.ico',
      //  'logo_url' => '/images/kolubara.png',
      //  'app_name' => env('APP_NAME'),
      //  'app_email' => env('MAIL_FROM_ADDRESS'),
        'flow_paginate_allowed' => '1000',
        'flow_paginate_default' => '10',
        'multiday_max_days'     => '20',
        'multiday_default_days' => '7',
        'max_rodents_scan_cycle' => (string) (12 * 60), // u sekundama
        'telegram_section_flow' => '1',
    ],
    'field_config' => [

        'site' => [
          /*  'favicon_url' => [
                'rules' => 'nullable|string|max:70',
                'type' => 'text'
            ],
            'logo_url' => [
                'rules' => 'nullable|string|max:70',
                'type' => 'text'
            ],
            'app_name' => [
                'rules' => 'required|string|max:50',
                'type' => 'text',
                'required' => true,
            ],
            'app_email' => [
                'type' => 'email',
                'rules' => 'required|email',
                'required' => true,
            ],*/
            'flow_paginate_allowed' => [
                'rules' => 'required|integer|min:5|max:1000',
                'type' => 'text',
                'required' => true,
            ],
            'flow_paginate_default' => [
                'rules' => 'required|numeric|min:5|max:1000',
                'type' => 'text',
                'required' => true,
            ],
            'max_rodents_scan_cycle' => [
                'rules' => 'required|numeric|min:5|max:10000',
                'type' => 'text',
                'required' => true,
            ],
            'multiday_max_days' => [
                'rules' => 'required|integer|min:1|max:50',
                'type' => 'text',
                'required' => true,
            ],
            'multiday_default_days' => [
                'rules' => 'required|integer|min:1|max:50',
                'type' => 'text',
                'required' => true,
            ],
            'telegram_section_flow' => [
                'rules' => 'required|in:1,0',
                'type' => 'text',
                'required' => true,
            ],
        ],
    ]
];
