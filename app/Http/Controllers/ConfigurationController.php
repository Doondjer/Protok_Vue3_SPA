<?php

namespace App\Http\Controllers;

use App\Models\Configuration;
use Illuminate\Contracts\Cache\Factory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ConfigurationController extends Controller
{

    /**
     * Display form for editing all configuration sections
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        return Inertia::render('Configurations/Index', [
            'configuration' => config('app_settings'),
            'translation' => trans('app_settings'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Factory $cache
     * @param $upsert
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Psr\Container\ContainerExceptionInterface
     * @throws \Psr\Container\NotFoundExceptionInterface
     */
    public function update(Factory $cache, $upsert = [])
    {
        $configKeys = array_keys(config('app_settings.values'));

        request()->validate(['section' => 'required|in:' . implode(',', array_keys(config('app_settings.field_config')))]);

        $section = request()->get('section');

        foreach (request()->only($configKeys) as $name => $value) {
            $upsert[] = ['config_name' => $name, 'config_value' => json_encode($value)];
            $rules[$name] = config("app_settings.field_config.$section.$name.rules") ? : '';
            if(config("app_settings.field_config.$section.$name.type") === 'array') {
                $rules["$name.*"] = config("app_settings.field_config.$section.$name.array_rules") ? : '';
            }
        }

        request()->validate( $rules );

        Configuration::upsert($upsert,'config_name');

        $cache->forget('app_settings');

        return redirect()->back()->with('success', 'Konfiguracija je uspešno izmenjena!');
    }
}
