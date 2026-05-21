<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);

Route::middleware('auth:sanctum')->group(function () {

    // PRODUCTS ADMIN
    Route::post('/products', [ProductController::class, 'store']);
    Route::put('/products/{id}', [ProductController::class, 'update']);
    Route::delete('/products/{id}', [ProductController::class, 'destroy']);

    // ORDERS USER
    Route::get('/orders', [OrderController::class, 'index']);
    Route::post('/orders', [OrderController::class, 'store']);

    // ORDERS ADMIN
    Route::get('/admin/orders', [OrderController::class, 'allOrders']);
    Route::put('/admin/orders/{id}/status', [OrderController::class, 'updateStatus']);

    // DASHBOARD
    Route::get('/admin/dashboard', [OrderController::class, 'dashboard']);
    Route::get('/admin/stats', [OrderController::class, 'stats']);

    // AUTH
    Route::post('/logout', [AuthController::class, 'logout']);
});