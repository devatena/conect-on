<?php

namespace App\Http\Controllers\Prestador;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Repositories\Eloquent\PrestadorRepository;
use Illuminate\Http\Request;

class PrestadorController extends Controller
{

    protected $model;

    public function __construct(PrestadorRepository $prestadorRepository)
    {
        $this->model = $prestadorRepository;
    }

    public function destroy($id)
    {
        // Encontre o usuário pelo ID
        $user = User::findOrFail($id);

        // Deletar o usuário
        $user->delete();

        // Retornar uma resposta ou redirecionar
        return redirect(route('prestadores'));
    }

    public function store(Request $request)
    {
        $user = $this->model->createUser($request->all());
        if ($user) {
            return redirect(route('prestadores'));
        }
    }
}
