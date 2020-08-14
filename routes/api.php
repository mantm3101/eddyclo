<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$api->post('auth_token', 'AuthController@login');

$api->get('products', 'ProductController@index');

$api->group(['middleware' => 'auth'], function ($api) {
    $api->post('logout', 'AuthController@logout');
    $api->post('refresh', 'AuthController@refresh');
    $api->get('profile', 'AuthController@profile');
});
