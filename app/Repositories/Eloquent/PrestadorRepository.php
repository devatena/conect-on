<?php

namespace App\Repositories\Eloquent;

use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;



class PrestadorRepository
{
    protected $model;

    public function __construct(User $model)
    {
        $this->model = $model;
    }

    public function createUser(array $user)
    {
        $user['password'] = Hash::make($user['cpf']);
        try {
            $newUser = $this->model->create($user);
            return $newUser;
        } catch (Exception $e) {
            // Lidar com a exceção, logar o erro ou retornar uma mensagem de erro
            return null; // ou lançar novamente a exceção dependendo da sua necessidade
        }
    }
}
