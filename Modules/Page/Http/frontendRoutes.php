<?php

use Illuminate\Routing\Router;

/** @var Router $router */

// $router->any('{uri}', [
//     'uses' => 'PublicController@uri',
//     'as' => 'page',
//     'middleware' => config('asgard.page.config.middleware'),
//     ])->where('uri', '.*');

$router->fallback('PublicController@homepage');
