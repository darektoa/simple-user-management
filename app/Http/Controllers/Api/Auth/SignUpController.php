<?php

namespace App\Http\Controllers\Api\Auth;

use App\Exceptions\ResponseException;
use App\Helpers\ResponseHelper;
use App\Http\Controllers\Controller;
use Illuminate\Http\{Request, JsonResponse};
use App\Http\Requests\Api\Auth\SignUp\StoreRequest;
use App\Http\Resources\UserResource;
use App\Services\UserService;

class SignUpController extends Controller
{
    /**
     * Sign-up for new account.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreRequest $request): JsonResponse
    {
        try {
            $user           = UserService::signUp($request);
            $token          = $user->createToken('SIGNUP')->plainTextToken;
            $user->token    = $token;

            return ResponseHelper::make(
                UserResource::make($user)
            );
        } catch (ResponseException $error) {
            return ResponseHelper::error($error);
        }
    }
}
