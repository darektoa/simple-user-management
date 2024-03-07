<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\ResponseException;
use App\Helpers\ResponseHelper;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\{JsonResponse, Request};

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $users = User::all();
            $activeUsers = $users->where('status', 1)->count();
            $inactiveUsers = $users->where('status', 2)->count();
            $registeredUsers = $users->count();

            return ResponseHelper::make([
                'active_users' => $activeUsers,
                'inactive_users' => $inactiveUsers,
                'registered_users' => $registeredUsers,
            ]);
        } catch (ResponseException $err) {
            return ResponseHelper::error(
                $err->getErrors(),
                $err->getMessage(),
                $err->getCode()
            );
        }
    }
}
