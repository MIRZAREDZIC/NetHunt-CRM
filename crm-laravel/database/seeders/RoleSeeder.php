<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        // Create roles
        $superAdmin = Role::firstOrCreate(['name' => 'Super Admin']);
        $admin = Role::firstOrCreate(['name' => 'Admin']);
        $user = Role::firstOrCreate(['name' => 'User']);

        // Create permissions
        $permissions = [
            'view users',
            'create users',
            'edit users',
            'delete users',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }

        // Assign all permissions to Super Admin
        $superAdmin->givePermissionTo($permissions);

        // Assign some permissions to Admin
        $admin->givePermissionTo(['view users', 'create users', 'edit users']);

        // Assign basic permissions to User
        $user->givePermissionTo(['view users']);

        // Assign roles to existing users
        $users = User::all();
        foreach ($users as $user) {
            if ($user->email === 'mirza@example.com') {
                $user->assignRole('Super Admin');
            } else {
                $user->assignRole('User');
            }
        }
    }
} 