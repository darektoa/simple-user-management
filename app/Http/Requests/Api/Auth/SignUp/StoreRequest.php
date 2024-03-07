<?php

namespace App\Http\Requests\Api\Auth\SignUp;

use App\Helpers\ResponseHelper;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

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

    /**
     * Handle a failed validation attempt.
     *
     * @param Illuminate\Contracts\Validation\Validator $validator
     * @return void
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            ResponseHelper::error($validator->errors(), 'Unprocessable', 422)
        );
    }
}
