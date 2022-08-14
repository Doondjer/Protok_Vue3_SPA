<?php

namespace App\Http\Controllers;

use App\Acme\Traits\UserValidationRules;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Http\Resources\UserResource;

class UsersController extends Controller
{
    use UserValidationRules;

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

        return Inertia::render('Users/Index', [
            'filters' => request()->all('search', 'trashed', 'per_page'),
            'users' => User::where('name', 'LIKE', "%{$query}%")
            ->when(request()->get('trashed') === 'with', function($q){
                return $q->withTrashed();
            })
            ->when(request()->get('trashed') === 'only', function($q){
                return $q->onlyTrashed();
            })
            ->paginate($perPage)
            ->withQueryString()
            ->through(fn($user) => [
                'id' => $user->id,
                'name' => $user->name,
                'is_admin' => $user->isAdmin,
                'role' => $user->isAdmin ? 'Administrator' : 'Korisnik',
                'is_trashed' => (bool) $user->deleted_at,
                'email' => $user->email,
                'updated_at' => $user->updated_at->diffForHumans()
            ])
        ]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function create()
    {
        return Inertia::render('Users/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $validated = $this->prepareUserData($request);

        $user = User::create($validated);

        return redirect()->route('user.index')->with('success', "Korisnik $user->email je uspešno kreiran.");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param User $user
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function edit(User $user)
    {

        return Inertia::render('Users/Edit', [
            'user' => new UserResource($user)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param User $user
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, User $user)
    {
        if( ! Auth::user()->isAdmin) {

            $user = Auth::user();
        }

        $validated = $this->prepareUserData($request, $user);

        $user->update($validated);

        return redirect()->back()
            ->with('success', "Korisnik $user->name je uspešno izmenjen.");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->back()->with('success', "Korisnik $user->email je uspešno obrisan.");
    }

    /**
     * Restore the specified resource from storage.
     *
     * @param User $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function undelete(User $user)
    {
        $user->restore();

        return redirect()->back()->with(['success' => "Korisnik $user->name je uspešno vraćen!"]);
    }

    /**
     * @param Request $request
     * @return array
     */
    public function prepareUserData(Request $request, User $user = null): array
    {
        $validated = $request->validate($this->userRules($user));

        if ($request->get('password')) {
            $validated = array_replace($validated, [
                'password' => Hash::make($request->get('password'))
            ]);
        } else {
            unset($validated['password']);
        }

        return $validated;
    }
}
