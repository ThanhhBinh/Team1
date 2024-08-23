<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        // Thêm các URI vào đây để bỏ qua kiểm tra CSRF
        'vnpay_payment',
        '/api/vnpay_payment',
        'payment/create-intent',
        'sanctum/csrf-cookie',
        // Thêm các URI khác nếu cần
    ];
}

