<?php

namespace App\Http\Controllers\Recordings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Ajustment, TimeRecording};

class AjustmentController extends Controller
{
    public function sendAjustement(Request $request)
    {
        $ajuste = Ajustment::create($request->all());
        $registro = TimeRecording::find($request->time_recording_id);
        $registro->adjustment = 'sent';
        $registro->save();

        return redirect('/acompanhamento');
    }
}
