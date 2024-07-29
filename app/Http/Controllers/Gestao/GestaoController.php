<?php

namespace App\Http\Controllers\Gestao;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\TimeRecording;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;


class GestaoController extends Controller
{
    public function index()
    {
        return  Inertia::render('Gestao/Index');
    }

    public function prestadores()
    {

        $prestadores = User::all();

        return  Inertia::render('Gestao/Prestadores/Index', [
            'prestadores' => $prestadores
        ]);
    }

    public function acompanhamento(Request $request)
    {
        $prestadores = User::all();
    

        if ($request->id) {

            $dataAtual = Carbon::now();
            $primeiroDiaMes = $dataAtual->firstOfMonth()->format('Y-m-d');
            $ultimoDiaMes = $dataAtual->endOfMonth()->addDay(1)->format('Y-m-d');


            $records = User::find($request->id)->records->whereBetween('date', [$primeiroDiaMes, $ultimoDiaMes])->groupBy('date');

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
                    $total = str_pad($totalHoras, 2, "0", STR_PAD_LEFT)  . ':' . str_pad($totalMinutos, 2, "0", STR_PAD_LEFT) . ':' . str_pad($totalSeg, 2, "0", STR_PAD_LEFT);
                }

                $sums[$indice] = $total;
                $nullRecords[$indice] = $errors > 0 ? true : false;
            }
            return  Inertia::render('Gestao/Acompanhamento/Index', [
                'records' => [
                    'hour' => $records,
                    'totalHour' => $sums,
                    'errors' => $nullRecords
                ],
                'prestadores' => $prestadores,
                'selected' => $request->id
            ]);
        }

        return  Inertia::render('Gestao/Acompanhamento/Index', [
            'records' => [
                'hour' => [],
                'totalHour' => [],
                'errors' => []
            ],
            'prestadores' => $prestadores,
        ]);
    }
}
