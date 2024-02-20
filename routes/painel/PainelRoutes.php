<?php

use App\Http\Controllers\Acompanhamento\AcompanhamentoController;
use App\Http\Controllers\Painel\PainelController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->prefix('painel')->group( function () {
    Route::get('/',  [PainelController::class, 'showRedording'])->name('painel');
});


Route::middleware('auth')->prefix('acompanhamento')->group( function () {
    Route::get('/',  [AcompanhamentoController::class, 'index'])->name('acompanhamento');
});

