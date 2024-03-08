<?php

namespace App\Http\Controllers\Painel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TimeRecording;
use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PainelController extends Controller
{

    
    public function showRedording()
    {
        $now = Carbon::now();
        $date = $now->format('Y-m-d');
        $recordToDay = TimeRecording::where('date', $date)->where('user_id', Auth::user()->id)->get();
        $totalHoras = 0;
        $totalMinutos = 0;
        $totalSeg = 0;
        $total = null;
        foreach ($recordToDay as $record) {
            if ($record->hour_complete !== null) {
                $horas = explode(":", $record->hour_complete);
                $hora = intval($horas[0]);
                $min = intval($horas[1]);
                $seg = intval($horas[2]);
                $totalHoras = $hora + $totalHoras;
                $totalMinutos = $min + $totalMinutos;
                $totalSeg = $seg + $totalSeg;
                if ($totalSeg >= 60) {
                    $totalMinutos++;
                    $totalSeg = $totalSeg - 60;
                }
                if ($totalMinutos >= 60) {
                    $totalHoras++;
                    $totalMinutos = $totalMinutos - 60;
                }
            }

            $total = str_pad($totalHoras, 2, "0", STR_PAD_LEFT)  . ':' . str_pad($totalMinutos, 2, "0", STR_PAD_LEFT) . ':' . str_pad($totalSeg, 2, "0", STR_PAD_LEFT)  ;
        }

        return Inertia::render('Colaborador/Painel', [
            'recordToDay' => [
                'horas' => $recordToDay,
                'totalHoras' => $total
            ]
        ]);
    }
}
