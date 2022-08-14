<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;

class setTestModeActiveCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test-mode:start';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command will set active test mode without sqlserver database';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Cache::put('test:mode', true, 60 * 60 * 24);
        
        $this->info('Application now work in test mode for 24h');
    }
}
