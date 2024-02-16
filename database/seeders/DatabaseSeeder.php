<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'Herbet Junior',
            'email' => 'herbetjr@gmail.com',
            'cpf' => '04261687550',
            'role' => 'Desenvolverdor',
            'operation' => 'Presencial' ,
            'password' => Hash::make('01072015')
        ]);
        DB::table('users')->insert([
            'name' => 'Publicitario',
            'email' => 'herbet@gmail.com',
            'cpf' => '12345678910',
            'role' => 'Publicitario',
            'operation' => 'Home Office' ,
            'password' => Hash::make('12345')
        ]);
    }
}
