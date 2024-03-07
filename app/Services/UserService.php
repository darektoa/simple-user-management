<?php

namespace App\Services;

use App\Exceptions\ResponseException;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserService {
    /**
     * User sign-up service
     * 
     * @param \Illuminate\Http\Request $request
     * @return App\Models\User
     */
    public static function signUp(Request $request): User
    {
        $user = User::create([
            'fullname' => $request->get('fullname'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
        ]);
            
        return $user;
    }
}