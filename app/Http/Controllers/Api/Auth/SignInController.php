<?php

namespace App\Http\Controllers\Api\Auth;

use App\Exceptions\ResponseException;
use App\Helpers\ResponseHelper;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\{Request, JsonResponse};
use Illuminate\Support\Facades\Auth;

class SignInController extends Controller
{
    /**
     * Sign-in to specified account.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        try {
            Auth::attempt([
                'email' => $request->email,
                'password' => $request->password,
            ]);

            if (!Auth::check())
                throw new ResponseException('Account did not match', 404);

            $user           = User::find(Auth::id());
            $token          = $user->createToken('SIGNIN')->plainTextToken;
            $user->token    = $token;

            return ResponseHelper::make(
                UserResource::make($user)
            );
        } catch (ResponseException $error) {
            return ResponseHelper::error($error);
        }
    }
}
