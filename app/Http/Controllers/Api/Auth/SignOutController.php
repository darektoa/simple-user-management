<?php

namespace App\Http\Controllers\Api\Auth;

use App\Exceptions\ResponseException;
use App\Helpers\ResponseHelper;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class SignOutController extends Controller
{
    /**
     * Sign-out the loggedin account.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(): JsonResponse
    {
        try {
            Auth::user()
                ->currentAccessToken()
                ->delete();

            return ResponseHelper::make();
        } catch (ResponseException $error) {
            return ResponseHelper::error(
                $error
            );
        }
    }
}
