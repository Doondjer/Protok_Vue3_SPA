<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Auth
Route::middleware('guest')->group(function(){

    Route::get('login', [LoginController::class, 'create'])->name('login');
    Route::post('login', [LoginController::class, 'store'])->name('login.store'); 
});

Route::delete('logout', [LoginController::class, 'destroy'])->name('logout');


Route::middleware('auth')->group(function(){

    Route::get('/', [ \App\Http\Controllers\FlowsController::class, 'index'])->name('home');

    Route::resource('/user', '\App\Http\Controllers\UsersController')->only(['edit', 'update'])->middleware('current_or_admin');

    Route::post('export', [\App\Http\Controllers\AdminsController::class, 'export'])->name('export.api');

    Route::get('/chart/station/{station}', [\App\Http\Controllers\ChartsController::class, 'station'])->name('chart.station.api');
    Route::get('/table/station', [\App\Http\Controllers\ChartsController::class, 'table'])->name('table.station.api');
});


Route::middleware('admin')->prefix('admin')->group(function() {

    Route::get('dashboard' , [\App\Http\Controllers\AdminsController::class, 'dashboard'])->name('admin.dashboard');
    Route::get('maintenance', [\App\Http\Controllers\AdminsController::class, 'maintenance'])->name('admin.maintenance');
    Route::post('shut/down', [\App\Http\Controllers\AdminsController::class, 'down'])->name('admin.maintenance.down');
    Route::get('bring/up', [\App\Http\Controllers\AdminsController::class, 'up'])->name('admin.maintenance.up');
    Route::get('phpinfo', [\App\Http\Controllers\AdminsController::class, 'phpinfo'])->name('phpinfo');
    Route::get('/server/usage', [\App\Http\Controllers\AdminsController::class, 'server_usage'])->name('admin.server_usage');
    Route::get('/websockets', [\App\Http\Controllers\AdminsController::class, 'websockets'])->name('admin.websockets');

    Route::resource('rodent', '\App\Http\Controllers\RodentsController')->except(['show']);

    Route::delete('rodent-type/{rodent_type}/image', [\App\Http\Controllers\RodentTypesController::class, 'deleteImage'])->name('rodent_type.delete.image');
    Route::post('rodent-type/{rodent_type}/image', [\App\Http\Controllers\RodentTypesController::class, 'uploadImage'])->name('rodent_type.upload.image');

    Route::resource('rodent-type', '\App\Http\Controllers\RodentTypesController')->except(['show']);

    Route::resource('excavation-field', '\App\Http\Controllers\ExcavationFieldsController')->except(['show']);

    Route::resource('/user', '\App\Http\Controllers\UsersController')->only(['index' ,'create', 'store', 'destroy']);
    Route::patch('/user/{user}/undelete', [\App\Http\Controllers\UsersController::class, 'undelete'])->name('user.undelete')->withTrashed();

    Route::get('/configuration', [\App\Http\Controllers\ConfigurationController::class, 'index'])->name('admin.configuration.index');
    Route::patch('/configuration', [\App\Http\Controllers\ConfigurationController::class, 'update'])->name('admin.configuration.update');

    Route::post('/rodent-type/{rodent_type}/attribute', [\App\Http\Controllers\RodentAttributesController::class, 'store'])->name('rodent_attribute.store.api');
    Route::delete('/rodent-type/{rodent_type}/attribute/{attribute}', [\App\Http\Controllers\RodentAttributesController::class, 'destroy'])->name('rodent_attribute.destroy.api');
});


    
      