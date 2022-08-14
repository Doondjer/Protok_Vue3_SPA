<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Flow extends Model
{
    use HasFactory;

    public function __construct($type = null) {

        parent::__construct();

        if( ! Cache::has('test:mode')) {
            
            $this->setTable('Vrednosti');
        }        

        $this->setConnection(Cache::has('test:mode') ? 'mysql' : 'sqlsrv');
    }

    /**
     * The attributes that should be cast.
     * 
     * @var array<int, string>
     */ 
    protected $casts = [
        'DatumVreme' => 'datetime'
    ];

    /**
     * Mutate Attribute to round
     * 
     * @var float
     */
    public function getTotalFlowAttribute()
    {
        return round($this->attributes['total_flow'], 1);
    }

    /**
     * Mutate Attribute to round
     * 
     * @var float
     */
    public function getShiftFlowAttribute()
    {
        return round($this->attributes['shift_flow'], 1);
    }

}
