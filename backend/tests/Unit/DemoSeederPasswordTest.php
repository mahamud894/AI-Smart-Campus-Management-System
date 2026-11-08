<?php

namespace Tests\Unit;

use Database\Seeders\DemoSeederPassword;
use Tests\TestCase;

class DemoSeederPasswordTest extends TestCase
{
    public function test_it_returns_the_configured_demo_password(): void
    {
        config(['demo.password' => 'configured-demo-password']);

        $this->assertSame('configured-demo-password', DemoSeederPassword::get());
    }

    public function test_it_requires_a_non_empty_demo_password(): void
    {
        config(['demo.password' => ' ']);

        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessage('CAMPUS_DEMO_PASSWORD must be set before running demo seeders.');

        DemoSeederPassword::get();
    }
}
