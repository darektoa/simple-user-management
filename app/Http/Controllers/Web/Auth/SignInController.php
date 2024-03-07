<?php

namespace App\Http\Controllers\Web\Auth;

use App\Exceptions\ResponseException;
use App\Helpers\AuthHelper;
use App\Http\Controllers\Controller;
use Illuminate\Http\{Request, RedirectResponse};
use Illuminate\Support\Facades\Auth;
use Inertia\{Inertia, Response as InertiaResponse};

class SignInController extends Controller
{
    /**
     * Sign-in view.
     *
     * @return \Inertia\Response
     */
    public function index(): InertiaResponse
    {
        return Inertia::render('Routes');
    }


    /**
     * Sign-in to specified account.
     *
     * @return \Illuminate\Http\RedirectResponse|\Inertia\Response
     */
    public function store(Request $request): RedirectResponse | InertiaResponse
    {
        try {
            Auth::attempt([
                'email' => $request->username,
                'password' => $request->password,
            ]);

            return redirect()
                ->route('dashboard')
                ->with('success', 'Successfully sign-in');
        } catch (ResponseException $err) {
            $errors = $err->getErrors();

            return redirect()
                ->route('signIn')
                ->withInput()
                ->with('errors', $errors)
                ->withErrors([$err->getMessage()]);
        }
    }
}
