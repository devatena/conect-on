<?php

namespace App\Http\Controllers\Acompanhamento;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TimeRecording;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use PharIo\Manifest\Author;

class AcompanhamentoController extends Controller
{
    public function index()
    {
        $dataAtual = Carbon::now();
        $primeiroDiaMes = $dataAtual->firstOfMonth()->format('Y-m-d');
        $ultimoDiaMes = $dataAtual->endOfMonth()->format('Y-m-d');

        $records = Auth::user()->records->where('date', '>', $primeiroDiaMes)->where('date', '<=', $ultimoDiaMes)->groupBy('date');



        $totalHoras = 0;
        $totalMinutos = 0;
        $total = null;
        // foreach ($records as $record) {
        //     if ($record->hour_complete !== null) {
        //         $horas = explode(":", $record->hour_complete);
        //         $hora = intval($horas[0]);
        //         $min = intval($horas[1]);
        //         $totalHoras = $hora + $totalHoras;
        //         $totalMinutos = $min + $totalMinutos;
        //         if ($totalMinutos >= 60) {
        //             $totalHoras++;
        //             $totalMinutos = $totalMinutos - 60;
        //         }
        //     }

        //     $total = str_pad($totalHoras, 2, "0", STR_PAD_LEFT) . ':' . str_pad($totalMinutos, 2, "0", STR_PAD_LEFT);
        // }
        // return $records;
        return Inertia::render('Colaborador/Acompanhamento', [
            'records' => [
                'hour' => $records,
                // 'totalHour' => $total
            ]
        ]);
    }
}
