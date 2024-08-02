<?php

namespace App\Http\Controllers\Recordings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TimeRecording;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;


class HourController extends Controller
{

    public function input()
    {
        $now = Carbon::now();
        $date = $now->format('Y-m-d');
        $recordToDay = TimeRecording::where('date', $date)->where('user_id', Auth::user()->id)->orderBy('created_at', 'desc')->get();
        $validInput = $recordToDay->first();
        if (count($recordToDay) === 0) {
            $query = TimeRecording::create([
                'user_id' => Auth::user()->id,
                'input' => $now->format('H:i:s'),
                'date' => $date
            ]);
        }
        if (count($recordToDay) > 0) {
            if ($validInput->output === null) {
                return 'não pode bater outra entrada';
            }
            if ($validInput->output !== null) {
                $query = TimeRecording::create([
                    'user_id' => Auth::user()->id,
                    'input' => $now->format('H:i:s'),
                    'date' => $date
                ]);
            }
        }

        return  redirect()->route('painel')->with(['message' => 'Registro de dispinibilidade realizado', 'messageLink' => 'https://t.me/share/url?url=**'.Auth::user()->name.'**&text=T%C3%B4%20on']);
    }

    public function output()
    {

        $now = Carbon::now();
        $date = $now->format('Y-m-d');
        $recordToDay = TimeRecording::where('date', $date)->where('user_id', Auth::user()->id)->orderBy('created_at', 'desc')->get();
        $validOutput = $recordToDay->first();
        if (count($recordToDay) === 0) {
            return 'não pode bater saida';
        }
        if (count($recordToDay) > 0) {
            if ($validOutput->output === null) {
                $diff = Carbon::parse($validOutput->input)->floatDiffInHours($validOutput->output, false);
                $ht = Carbon::parse('00:00:00')->addRealHours($diff)->format('H:i:s');
                $update = TimeRecording::find($validOutput->id);
                $update->output = $now->format('H:i:s');
                $update->hour_complete = $ht;
                $update->save();
            } else {
                return 'não pode bater saida';
            }
        }

        return  redirect()->route('painel')->with(['message' => 'Registro de encerramento realizado com sucesso', 'messageLink' => 'https://t.me/share/url?url=**'.Auth::user()->name.'**&text=T%C3%B4%20off']);
    }
}
