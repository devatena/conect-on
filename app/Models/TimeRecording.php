<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimeRecording extends Model
{
    use HasFactory;

    protected $fillable = [
        'input',
        'output',
        'date',
        'hour_complete'
     ];
}
