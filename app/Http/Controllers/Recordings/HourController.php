<?php

namespace App\Http\Controllers\Recordings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TimeRecording;
use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;


class HourController extends Controller
{

    public function showRedording()
    {
        $now = Carbon::now();
        $date = $now->format('Y-m-d');
        $recordToDay = TimeRecording::where('date', $date)->get();
        $totalHoras = 0;
        $totalMinutos = 0;
        $total = null;
        foreach ($recordToDay as $record) {
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

            $total = str_pad($totalHoras, 2, "0", STR_PAD_LEFT). ':'.str_pad($totalMinutos, 2, "0", STR_PAD_LEFT);
        }

        return Inertia::render('Colaborador/Painel', [
            'recordToDay' => [
                'horas' => $recordToDay,
                'totalHoras' => $total
            ]
        ]);
    }

    public function input()
    {
        $now = Carbon::now();
        $date = $now->format('Y-m-d');
        $recordToDay = TimeRecording::where('date', $date)->orderBy('created_at', 'desc')->get();
        $validInput = $recordToDay->first();
        if (count($recordToDay) === 0) {
            $query = TimeRecording::create([
                'input' => $now->format('H:i'),
                'date' => $date
            ]);
        }
        if (count($recordToDay) > 0) {
            if ($validInput->output === null) {
                return 'não pode bater outra entrada';
            }
            if ($validInput->output !== null) {
                $query = TimeRecording::create([
                    'input' => $now->format('H:i'),
                    'date' => $date
                ]);
            }
        }

        return redirect()->back();
    }

    public function output()
    {

        $now = Carbon::now();
        $date = $now->format('Y-m-d');
        $recordToDay = TimeRecording::where('date', $date)->orderBy('created_at', 'desc')->get();
        $validOutput = $recordToDay->first();
        if (count($recordToDay) === 0) {
            return 'não pode bater saida';
        }
        if (count($recordToDay) > 0) {
            if ($validOutput->output === null) {
                $diff = Carbon::parse($validOutput->input)->floatDiffInHours($validOutput->output, false);
                $ht = Carbon::parse('00:00:00')->addRealHours($diff)->format('H:i');
                $update = TimeRecording::find($validOutput->id);
                $update->output = $now->format('H:i');
                $update->hour_complete = $ht;
                $update->save();
            } else {
                return 'não pode bater saida';
            }
        }

        return redirect()->back();
    }
}
