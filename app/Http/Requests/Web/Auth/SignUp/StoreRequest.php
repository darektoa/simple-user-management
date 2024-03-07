<?php

namespace App\Http\Requests\Web\Auth\SignUp;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'fullname' => 'required|min:3|max:100',
            'email' => 'required|email|unique:users|max:255',
            'password' => 'required|min:8|max:16',
            'confirm_password' => 'required|same:password',
        ];
    }
}
