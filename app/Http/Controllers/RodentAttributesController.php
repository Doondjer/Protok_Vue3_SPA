<?php

namespace App\Http\Controllers;

use App\Http\Requests\RodentAttributeRequest;
use App\Http\Resources\RodentAttributeResource;
use App\Models\RodentAttribute;
use App\Models\RodentType;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RodentAttributesController extends Controller
{


    /**
     * Store a newly created resource in storage.
     *
     * @param RodentType $rodentType
     * @param RodentAttributeRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(RodentType $rodentType, RodentAttributeRequest $request)
    {
        $attribute = $rodentType->rodentAttributes()->create($request->validated());

        return redirect()->back()->with('success', 'Uspešno ste dodali tehničku karakteristiku.');
    }

    /**
     * Remove specified resource from storage.
     *
     * @param RodentType $rodentType
     * @param RodentAttributeRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(RodentType $rodentType, RodentAttribute $attribute)
    {

        if($attribute->rodentType == $rodentType ? $attribute->delete() : 0) {

            return redirect()->back()->with('success', 'Uspešno ste obrisali tehničku karakteristiku.');
        }

        return redirect()->back()->with('error', 'Tehnička karakteristika nije uspešno obrisana.');
    }
}
