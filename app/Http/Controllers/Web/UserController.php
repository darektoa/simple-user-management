<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\Web\User\StoreRequest;
use App\Models\User;
use App\Services\UserManageService;
use Illuminate\Http\{RedirectResponse, Request};
use Inertia\{Inertia, Response as InertiaResponse};

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request): InertiaResponse | RedirectResponse
    {
        try {
            $search = $request->get('search');
            $users = User::when(boolval($search), fn ($query) => (
                $query->where('fullname', 'LIKE', "%$search%")
                ->orWhere('email', 'LIKE', "%$search%")
            ))
                ->get();

            return Inertia::render('Routes', compact(
                'users',
            ));
        } catch (\Exception $err) {
            return back()
                ->withErrors([$err->getMessage()]);
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
            UserManageService::create($request);

            return back()
                ->with('success', 'Successfully create user');
        } catch (\Exception $err) {
            return back()
                ->withErrors([$err->getMessage()]);
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
            UserManageService::update($userId, $request);

            return back()
                ->with('success', 'Successfully updated user');
        } catch (\Exception $err) {
            return back()
                ->withErrors([$err->getMessage()]);
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

            return back()
                ->with('success', 'Successfully disabled user');
        } catch (\Exception $err) {
            return back()
                ->withErrors([$err->getMessage()]);
        }
    }
}
