<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ajustment extends Model
{
    use HasFactory;

    protected $fillable = [
        'time_recording_id',
        'old_change',
        'new_change',
        'justification',
        'approve',
    ];
}
