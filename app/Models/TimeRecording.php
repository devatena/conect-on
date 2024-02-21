<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimeRecording extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'input',
        'output',
        'date',
        'hour_complete'
     ];

     protected $casts = [
        'date' => 'datetime:d/m/Y',
        'created_at' => 'datetime:d/m/Y',
    ];
}
