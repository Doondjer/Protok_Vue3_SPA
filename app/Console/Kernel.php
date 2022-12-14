<?php

namespace App\Console;

use App\Console\Commands\SendFlow;
use App\Console\Commands\SendSectionFlow;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected $commands = [
        SendFlow::class,
        SendSectionFlow::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
      //   $schedule->command('read:current_flow')->everyMinute();
         $schedule->command('send:panel')->everyMinute();
         $schedule->command('send:section_flow')->hourly();
    }

    protected function shortSchedule(\Spatie\ShortSchedule\ShortSchedule $shortSchedule)
    {
        // this command will run every 14 seconds
        $shortSchedule->command('read:current_flow')->everySeconds(14);
    }
    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
