<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;

Route::get('/',[ LoginController::class, 'login'])->middleware('guest')->name('login');
Route::post('/',[ LoginController::class, 'auth']);
Route::get('/logout',[ LoginController::class, 'logout']);
