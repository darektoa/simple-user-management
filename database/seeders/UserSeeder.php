<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [ // [name, email]
            ['Admin',   'admin@example.com'],
            ['Employee',  'employee@example.com'],
            ['Staff',  'staff@example.com'],
            ['Engineer', 'engineer@example.com'],
        ];

        foreach($users as $key => $user) {
            User::create([
                'fullname'  => $user[0],
                'email'     => $user[1],
                'password'  => Hash::make('password'),
            ]);
        }
    }
}
