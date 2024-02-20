<?php

namespace App\Http\Controllers\Acompanhamento;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TimeRecording;
use Carbon\Carbon;
use Inertia\Inertia;

class AcompanhamentoController extends Controller
{
    public function index()
    {
        $records = TimeRecording::all();
        $totalHoras = 0;
        $totalMinutos = 0;
        $total = null;
        foreach ($records as $record) {
            if ($record->hour_complete !== null) {
                $horas = explode(":", $record->hour_complete);
                $hora = intval($horas[0]);
                $min = intval($horas[1]);
                $totalHoras = $hora + $totalHoras;
                $totalMinutos = $min + $totalMinutos;
                if ($totalMinutos >= 60) {
                    $totalHoras++;
                    $totalMinutos = $totalMinutos - 60;
                }
            }

            $total = str_pad($totalHoras, 2, "0", STR_PAD_LEFT) . ':' . str_pad($totalMinutos, 2, "0", STR_PAD_LEFT);
        }
        return Inertia::render('Colaborador/Acompanhamento',[
            'records' => [
                'hour' => $records,
                'totalHour' => $total
            ]
        ]);
    }
}
