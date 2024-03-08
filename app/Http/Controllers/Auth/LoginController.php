<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login()
    {
        return Inertia::render('Index');
    }

    public function auth(Request $request)
    {
        $credentials = $request->validate([
            'cpf' => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect('/painel');
        } else {

            return back()->withErrors([
                'message' => 'Usuário ou Senha inválidos',
            ]);
        }

        // return redirect('/painel');


    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
