<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\ResponseException;
use App\Helpers\ResponseHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\User\StoreRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Services\UserManageService;
use Illuminate\Http\{JsonResponse, Request};

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $search = $request->get('search');
            $users = User::when(boolval($search), fn ($query) => (
                $query->where('fullname', 'LIKE', "%$search%")
                ->orWhere('email', 'LIKE', "%$search%")
            ))
                ->get();

            return ResponseHelper::make(
                UserResource::collection($users)
            );
        } catch (ResponseException $err) {
            return ResponseHelper::error(
                $err->getErrors(),
                $err->getMessage(),
                $err->getCode()
            );
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        try {
            $user = UserManageService::create($request);

            return ResponseHelper::make(
                UserResource::make($user)
            );
        } catch (ResponseException $err) {
            return ResponseHelper::error(
                $err->getErrors(),
                $err->getMessage(),
                $err->getCode()
            );
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $userId
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $userId)
    {
        try {
            $user = UserManageService::update($userId, $request);

            return ResponseHelper::make(
                UserResource::make($user)
            );
        } catch (ResponseException $err) {
            return ResponseHelper::error(
                $err->getErrors(),
                $err->getMessage(),
                $err->getCode()
            );
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $userId
     * @return \Illuminate\Http\Response
     */
    public function destroy($userId)
    {
        try {
            UserManageService::delete($userId);

            return ResponseHelper::make();
        } catch (ResponseException $err) {
            return ResponseHelper::error(
                $err->getErrors(),
                $err->getMessage(),
                $err->getCode()
            );
        }
    }
}
