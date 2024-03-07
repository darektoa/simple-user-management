<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\{RedirectResponse, Request};
use Inertia\{Inertia, Response as InertiaResponse};

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\InertiaResponse
     */
    public function index(Request $request): InertiaResponse | RedirectResponse
    {
        try {
            $users = User::all();
            $activeUsers = $users->where('status', 1)->count();
            $inactiveUsers = $users->where('status', 2)->count();
            $registeredUsers = $users->count();

            return Inertia::render('Routes', compact(
                'activeUsers',
                'inactiveUsers',
                'registeredUsers',
            ));
        } catch (\Exception $err) {
            return back();
        }
    }
}
