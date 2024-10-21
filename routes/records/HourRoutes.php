<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Recordings\{
    HourController,
    AjustmentController
};

Route::prefix('record')->group(function () {
    Route::post('/input', [HourController::class, 'input']);
    Route::post('/output', [HourController::class, 'output']);
    Route::post('/send-ajustment', [AjustmentController::class, 'sendAjustement']);
});
