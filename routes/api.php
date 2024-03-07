<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/**
 * AUTHENTICATION
 */
Route::post('/sign-in', [Auth\SignInController::class, 'store'])->name('signIn.post');
Route::post('/sign-up', [Auth\SignUpController::class, 'store'])->name('signUp.post');


/**
 * WITH AUTHENTICATION
 */
Route::middleware(['auth:sanctum'])->group(function() {
    Route::post('/sign-out', [Auth\SignOutController::class, 'store'])->name('signOut');
    Route::get('/summary', [HomeController::class, 'index'])->name('dashboard');
        
    /**
     * USERS
     */
    Route::prefix('/users')->name('users')->group(function() {
        Route::get('/', [UserController::class, 'index']);
        Route::post('/', [UserController::class, 'store']);
        
        Route::prefix('/{userId}')->group(function() {
            Route::patch('/', [UserController::class, 'update']);
            Route::delete('/', [UserController::class, 'destroy']);
        });
    });
});
