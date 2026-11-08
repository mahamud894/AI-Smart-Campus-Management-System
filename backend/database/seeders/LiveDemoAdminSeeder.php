<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class LiveDemoAdminSeeder extends Seeder
{
    public function run(): void
    {
        $password = DemoSeederPassword::get();

        User::updateOrCreate(
            ['email' => 'admin@nubtk.ac'],
            [
                'name' => 'Live Demo Administrator',
                'phone' => '01700000909',
                'password' => Hash::make($password),
                'role' => 'admin',
                'department' => null,
                'student_id' => null,
                'faculty_id' => null,
                'admin_id' => 'ADM-LIVE-001',
                'approval_status' => 'approved',
            ]
        );
    }
}
