<?php

namespace App\Http\Controllers;

use App\Acme\Traits\UploadTrait;
use App\Http\Requests\ExcavationFieldsRequest;
use App\Http\Requests\RodentTypeImageRequest;
use App\Http\Requests\RodentTypeRequest;
use App\Http\Resources\RodentAttributeResource;
use App\Models\ExcavationField;
use App\Models\RodentType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Symfony\Component\HttpFoundation\Response;
use Inertia\Inertia;

class RodentTypesController extends Controller
{
    use UploadTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     * @throws \Psr\Container\ContainerExceptionInterface
     * @throws \Psr\Container\NotFoundExceptionInterface
     */
    public function index()
    {
        $perPage = request()->get('per_page', 10);
        $query = request()->get('search', '');

        return Inertia::render('RodentTypes/Index', [
            'filters' => request()->all('search', 'trashed', 'per_page'),
            'types' => RodentType::where('name', 'LIKE', "%{$query}%")
                        ->orWhere('slug', 'LIKE', "%{$query}%")
            ->paginate($perPage)
            ->withQueryString()
            ->through(fn($type) => [
                'id' => $type->id,
                'name' => $type->name,
                'slug' => $type->slug,
            ])
        ]);
    }

    /**
     * Show the specified resource in json
     *
     * @param RodentType $rodentType
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(RodentType $rodentType)
    {
        return response()->json([
            'slug'  => $rodentType->slug,
            'name'  => $rodentType->name,

        ], Response::HTTP_OK);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function create()
    {
        return Inertia::render('RodentTypes/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param RodentTypeRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(RodentTypeRequest $request)
    {
        $rodentType = RodentType::create($request->validated());

        return redirect()->route('rodent-type.edit', $rodentType)->with('success', "Model Bagera '$rodentType->name' je uspešno kreiran.");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param RodentType $rodentType
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function edit(RodentType $rodentType)
    {
        $rodentAttributes = $rodentType->rodentAttributes;

        return Inertia::render('RodentTypes/Edit', [
            'rodentType' => $rodentType,
            'rodentAttributes' => RodentAttributeResource::collection($rodentAttributes)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param RodentType $rodentType
     * @param RodentTypeRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(RodentType $rodentType, RodentTypeRequest $request)
    {
        $rodentType->update($request->validated());

        return redirect()->route('rodent-type.index')->with('success', "Model Bagera '$rodentType->name' je uspešno izmenjen.");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param RodentType $rodentType
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(RodentType $rodentType)
    {
        $rodentType->delete();

        return redirect()->back()->with('success', 'Model Bagera je uspešno obrisan!');
    }

    /**
     * Upload image for specified resource
     * 
     * @param RodentType $rodentType
     * @param RodentTypeImageRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function uploadImage(RodentType $rodentType, RodentTypeImageRequest $request)
    {
        $this->storeImage($rodentType, $request->file('image'));

        return redirect()->back()->with('success', "Slika je uspešno postavljena.");
    }

    /**
     * remove image for specified resource
     * 
     * @param RodentType $rodentType
     * @return \Illuminate\Http\RedirectResponse
     */
    public function deleteImage(RodentType $rodentType)
    {
        if(Storage::disk('rodents')->delete($rodentType->image)) {

            $rodentType->update(['image' => '']);
        } else {
            throw new \Exception('Oooups! Slika nije obrisana sa sistema, obratite se administratoru.');
        }

        return redirect()->back()->with('success', "Slika je uspešno obrisana.");
    }

    /**
     * Handle image storing to filesystem and database
     * 
     * @param RodentType $rodentType
     * @param $image
     */
    protected function storeImage(RodentType $rodentType, $image)
    {
        $originalFilename = $image->getClientOriginalName();
        $originalMime = $image->getClientMimeType();

        $filename = $this->generateName($image);
        $size = $image->getSize();
        $image = Image::make($image)->orientate();

        $image->resize(null,1080, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });

        Storage::disk('rodents')->put($filename,$image->encode());

        $rodentType->update(['image' => $filename,$image->encode()]);
    }
}
