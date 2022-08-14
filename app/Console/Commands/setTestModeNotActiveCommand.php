<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;

class setTestModeNotActiveCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test-mode:stop';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command will deactivate test mode and will work with sqlserver database';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Cache::forget('test:mode');
        
        $this->info('Application is not working in test mode anymore!');
    }
}
