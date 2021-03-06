<?php

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

use Illuminate\Support\Facades\Route;

Route::get('/backend', '\Modules\Dashboard\Http\Controllers\Admin\DashboardController@index');
Route::get('/{path?}', '\Modules\Page\Http\Controllers\PublicController@homepage');
