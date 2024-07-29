<?php

namespace App\Http\Controllers\Prestador;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class PrestadorController extends Controller
{
    public function destroy($id)
    {
        // Encontre o usuário pelo ID
        $user = User::findOrFail($id);

        // Deletar o usuário
        $user->delete();

        // Retornar uma resposta ou redirecionar
        return redirect(route('prestadores'));
    }
}
