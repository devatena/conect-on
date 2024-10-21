<?php

use App\Http\Controllers\Acompanhamento\AcompanhamentoController;
use App\Http\Controllers\Painel\PainelController;
use App\Http\Controllers\Gestao\GestaoController;
use App\Http\Controllers\Prestador\PrestadorController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->prefix('painel')->group(function () {
    Route::get('/',  [PainelController::class, 'showRedording'])->name('painel');
});


Route::middleware('auth')->prefix('acompanhamento')->group(function () {
    Route::get('/',  [AcompanhamentoController::class, 'index'])->name('acompanhamento');
});

Route::middleware(['auth', 'isadmin'])->prefix('gestao')->group(function () {
    Route::get('/',  [GestaoController::class, 'index'])->name('gestao');

    Route::prefix('prestadores')->group(function () {
        Route::get('/', [GestaoController::class, 'prestadores'])->name('prestadores');
        Route::post('/', [PrestadorController::class, 'store'])->name('prestadores.store');
        Route::delete('{id}', [PrestadorController::class, 'destroy'])->name('prestador.destroy');
    });
    Route::prefix('acompanhamento')->group(function () {
        Route::get('/', [GestaoController::class, 'acompanhamento'])->name('acompanhamento');
        Route::post('/', [GestaoController::class, 'acompanhamento'])->name('acompanhamento');
    });
    
});
