<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Recordings\HourController;

Route::middleware('auth')->prefix('painel')->group( function () {
    Route::get('/',  [HourController::class, 'showRedording'])->name('painel');
});
