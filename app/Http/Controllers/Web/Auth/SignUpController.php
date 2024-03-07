<?php

namespace App\Http\Controllers\Web\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\{Request, RedirectResponse, Response};
use Inertia\{Inertia, Response as InertiaResponse};
use App\Http\Requests\Web\Auth\SignUp\StoreRequest;
use App\Services\UserService;

class SignUpController extends Controller
{
    /**
     * Sign-up view.
     * 
     * @return \Inertia\Response
     */
    public function index() :InertiaResponse
    {
        return Inertia::render('Routes');
    }
    
    
    /**
     * Sign-up success view.
     * 
     * @return \Inertia\Response
     */
    public function success() :InertiaResponse
    {
        return Inertia::render('Routes');
    }


    /**
     * Sign-up for new account.
     *
     * @return \Illuminate\Http\RedirectResponse|\Inertia\Response
     */
    public function store(StoreRequest $request) :RedirectResponse | InertiaResponse
    {
        try {
            UserService::signUp($request);

            return redirect()
                ->route('signUp.success')
                ->with('message', 'Registrasi sukses')
                ->withInput();
        }catch(\Exception $err) {
            return back()
                ->withErrors([$err->getMessage()])
                ->withInput();
        }
    }
}
