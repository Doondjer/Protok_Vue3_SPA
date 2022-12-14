<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RodentResource extends JsonResource
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
            'id' => $this->rodent_id,
            'rodent_id' => $this->rodent_id,
            'slug' => $this->slug,
            'name' => $this->name,
            'rodent_type' => new RodentTypeResource($this->rodentType),
            'rodent_type_id' => $this->rodent_type_id,
            'excavation_field_id' => $this->excavation_field_id,
        ];
    }
}
