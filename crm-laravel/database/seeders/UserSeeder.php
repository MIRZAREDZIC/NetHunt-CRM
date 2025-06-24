<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // Create Super Admin
        $superAdmin = User::create([
            'name' => 'Mirza',
            'email' => 'redzacs@gmail.com',
            'password' => Hash::make('test1234'),
        ]);
        $superAdmin->assignRole('Super Admin');

        // Create Guest
        $guest = User::create([
            'name' => 'Djuri',
            'email' => 'djurics@gmail.com',
            'password' => Hash::make('test1234'),
        ]);
        $guest->assignRole('User');
    }
} 