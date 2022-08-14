<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->when(Auth::user() && (Auth::user()->isAdmin || $this->id === Auth::user()->id), $this->id),
            'name' => $this->name,
            'is_admin' => $this->isAdmin,
            'is_deleted' => (bool) $this->deleted_at,
            'email' => $this->when(Auth::user() && (Auth::user()->isAdmin || $this->id === Auth::user()->id), $this->email),
        ];
    }
}
