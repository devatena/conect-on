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

        $sums = [];
        $nullRecords = [];

        foreach ($records as $indice => $valor) {
            $totalHoras = 0;
            $totalMinutos = 0;
            $totalSeg = 0;
            $total = 0;
            $errors = 0;

            foreach ($valor as $v) {
                if ($v['hour_complete'] !== null) {
                    $horas = explode(":", $v['hour_complete']);
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
                
                if ($v['output'] == null) {
                    $errors++;
                }
                $total = str_pad($totalHoras, 2, "0", STR_PAD_LEFT)  . ':' . str_pad($totalMinutos, 2, "0", STR_PAD_LEFT) . ':' . str_pad($totalSeg, 2, "0", STR_PAD_LEFT)  ;
              
            }

            $sums[$indice] = $total;
            $nullRecords[$indice] = $errors > 0 ? true : false;
  
        }
 
        return Inertia::render('Colaborador/Acompanhamento', [
            'records' => [
                'hour' => $records,
                'totalHour' => $sums,
                'errors' => $nullRecords
            ]
        ]);

    //   return[ 'records' => [
    //         'hour' => $records,
    //         'totalHour' => $sums,
    //         'errors' => $nullRecords
    //     ]
    //   ];
    }
}
