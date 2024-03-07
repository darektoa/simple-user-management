<?php

namespace App\Http\Controllers\Web;

use Illuminate\Support\Facades\Route;

Route::view('/welcome', 'welcome');

/**
 * AUTHENTICATION
 */
Route::get('/sign-in', [Auth\SignInController::class, 'index'])->name('signIn');
Route::get('/sign-up', [Auth\SignUpController::class, 'index'])->name('signUp');
Route::get('/sign-up/success', [Auth\SignUpController::class, 'success'])->name('signUp.success');
Route::get('/sign-out', [Auth\SignOutController::class, 'store'])->name('signOut');
Route::post('/sign-in', [Auth\SignInController::class, 'store'])->name('signIn.post');
Route::post('/sign-up', [Auth\SignUpController::class, 'store'])->name('signUp.post');


/**
 * WITH AUTHENTICATION
 */
Route::middleware(['auth'])->group(function() {
    Route::get('/', [HomeController::class, 'index'])->name('dashboard');

        
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