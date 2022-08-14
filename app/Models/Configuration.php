<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Configuration extends Model
{
    use HasFactory;

    /**
     * Table name for specified Model
     */
    protected $table = 'configuration';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'config_name',
        'config_value',
    ];

    /**
     * The attributes that should be cast.
     * 
     * @var array<int, string>
     */ 
    protected $casts = [
        'config_value' => 'array'
    ];
}
