<?php

namespace Database\Seeders;

use RuntimeException;

class DemoSeederPassword
{
    public static function get(): string
    {
        $password = config('demo.password');

        if (! is_string($password) || trim($password) === '') {
            throw new RuntimeException('CAMPUS_DEMO_PASSWORD must be set before running demo seeders.');
        }

        return $password;
    }
}
