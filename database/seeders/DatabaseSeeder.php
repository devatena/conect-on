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
            'name' => 'Itala',
            'email' => 'herbet@gmail.com',
            'cpf' => '97536784520',
            'role' => 'Publicitario',
            'operation' => 'Home Office' ,
            'password' => Hash::make('12345')
        ]);
        DB::table('users')->insert([
            'name' => 'VIC',
            'email' => 'herbet@gmail.com',
            'cpf' => '08314605557',
            'role' => 'Copy',
            'operation' => 'Presencial' ,
            'password' => Hash::make('12345')
        ]);
        DB::table('users')->insert([
            'name' => 'Iara',
            'email' => 'herbet@gmail.com',
            'cpf' => '08003089567',
            'role' => 'Designer',
            'operation' => 'Presencial' ,
            'password' => Hash::make('12345')
        ]);
        DB::table('users')->insert([
            'name' => 'Carol',
            'email' => 'herbet@gmail.com',
            'cpf' => '09990490546',
            'role' => 'Atendimento',
            'operation' => 'Presencial' ,
            'password' => Hash::make('12345')
        ]);
        DB::table('users')->insert([
            'name' => 'Jonas',
            'email' => 'herbet@gmail.com',
            'cpf' => '10095652493',
            'role' => 'RH',
            'operation' => 'Presencial' ,
            'password' => Hash::make('12345')
        ]);
    }
}
