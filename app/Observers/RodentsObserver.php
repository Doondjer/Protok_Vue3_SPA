<?php

namespace App\Observers;

use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;

class RodentsObserver
{

    /**
     * Handle the task "saved" event.
     *
     * @return void
     */
    public function saved(Model $model)
    {
        Cache::forget('rodents:all');
    }

    /**
     * Handle the task "deleted" event.
     *
     * @return void
     */
    public function deleted(Model $model)
    {
        Cache::forget('rodents:all');
    }

    /**
     * Handle the task "restored" event.
     *
     * @return void
     */
    public function restored(Model $model)
    {
        Cache::forget('rodents:all');
    }
}
