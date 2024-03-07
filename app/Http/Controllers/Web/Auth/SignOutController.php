<?php

namespace App\Http\Controllers\Web\Auth;

use App\Exceptions\ResponseException;
use App\Http\Controllers\Controller;
use Illuminate\Http\{Request, RedirectResponse, Response};
use Illuminate\Support\Facades\Auth;

class SignOutController extends Controller
{
    /**
     * Sign-out the loggedin account.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store() :RedirectResponse
    {
        try {
            Auth::logout();

            return redirect()
                ->route('signIn')
                ->with('success', 'Successfully logout your account');;
        }catch(ResponseException $err) {
            return back()
                ->withErrors([$err->getMessage()]);
        }
    }
}
