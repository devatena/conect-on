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
    public function index(Request $request)
    {
        if ($request->dataInicial == null || $request->dataFinal == null) {
            $dataAtual = Carbon::now();
            $dataInicial = $dataAtual->firstOfMonth()->format('Y-m-d');
            $dataFinal = $dataAtual->endOfMonth()->addDay(1)->format('Y-m-d');
        } elseif ($request->dataInicial !== null && $request->dataFinal !== null) {
            $dataInicial = Carbon::createFromFormat('Y-m-d', $request->dataInicial)->format('Y-m-d');
            $dataFinal = Carbon::createFromFormat('Y-m-d', $request->dataFinal)->addDay(1)->format('Y-m-d');
        }

       

        $records = Auth::user()->records->whereBetween('date',[$dataInicial, $dataFinal])->groupBy('date');

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
            ],
            'dateFilter' => [
                'dataInicial' => $request->dataInicial,
                'dataFinal' => $request->dataFinal,
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
