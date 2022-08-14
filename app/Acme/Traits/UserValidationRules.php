<?php

namespace App\Acme\Traits;

use App\Models\User;
use Illuminate\Validation\Rule;
//use Laravel\Fortify\Rules\Password;

trait UserValidationRules
{

    /**
     * Get the validation rules used to validate user.
     *
     * @return array
     */
    protected function userRules(User $user = null)
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class)->ignore($user?->id, 'id'),
            ],
            'password' => [ 
                'string', 
                ($user ? 'nullable' : 'required'), 
            ],
        ];
    }
}
