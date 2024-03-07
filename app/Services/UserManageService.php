<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Http\Request;
use App\Helpers\CollectionHelper;
use Illuminate\Support\Facades\Hash;

class UserManageService
{
    /**
     * Create new user
     * 
     * @param \Illuminate\Http\Request $request
     * @return App\Models\User
     */
    public static function create(Request $request = null): User
    {
        $user = User::create([
            'fullname' => $request->get('fullname'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
        ]);

        return $user;
    }


    /**
     * Update detail of user by user id
     * 
     * @param string $userId
     * @param \Illuminate\Http\Request $request
     * @return App\Models\User
     */
    public static function update($userId, Request $request = null): User
    {
        $user = User::find($userId);

        $user->update(CollectionHelper::getOrOld($request, $user, [
            'fullname',
            'email',
            'status',
        ])->toArray());

        return $user;
    }


    /**
     * Delete user by user id
     * 
     * @param string $userId
     * @return bool
     */
    public static function delete($userId): bool
    {
        User::find($userId)
            ->delete();

        return true;
    }
}
