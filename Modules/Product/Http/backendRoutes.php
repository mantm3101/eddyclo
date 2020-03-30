<?php

use Illuminate\Routing\Router;

/** @var Router $router */


$router->group(['prefix' => '/product'], function (Router $router) {
    /** Product routes */
    $router->bind('product', function ($id) {
        return app('Modules\Product\Repositories\ProductRepository')->find($id);
    });
    $router->get('products', [
        'as' => 'admin.product.product.index',
        'uses' => 'ProductController@index',
        'middleware' => 'can:product.products.index'
    ]);
    $router->get('products/create', [
        'as' => 'admin.product.product.create',
        'uses' => 'ProductController@create',
        'middleware' => 'can:product.products.create'
    ]);
    $router->post('products', [
        'as' => 'admin.product.product.store',
        'uses' => 'ProductController@store',
        'middleware' => 'can:product.products.create'
    ]);
    $router->get('products/{product}/edit', [
        'as' => 'admin.product.product.edit',
        'uses' => 'ProductController@edit',
        'middleware' => 'can:product.products.edit'
    ]);
    $router->put('products/{product}', [
        'as' => 'admin.product.product.update',
        'uses' => 'ProductController@update',
        'middleware' => 'can:product.products.edit'
    ]);
    $router->delete('products/{product}', [
        'as' => 'admin.product.product.destroy',
        'uses' => 'ProductController@destroy',
        'middleware' => 'can:product.products.destroy'
    ]);
    /** End Product routes */

    /** ProductCategory routes */
    $router->bind('productcategory', function ($id) {
        return app('Modules\Product\Repositories\ProductCategoryRepository')->find($id);
    });
    $router->get('productcategories', [
        'as' => 'admin.product.productcategory.index',
        'uses' => 'ProductCategoryController@index',
        'middleware' => 'can:product.productcategories.index'
    ]);
    $router->get('productcategories/create', [
        'as' => 'admin.product.productcategory.create',
        'uses' => 'ProductCategoryController@create',
        'middleware' => 'can:product.productcategories.create'
    ]);
    $router->post('productcategories', [
        'as' => 'admin.product.productcategory.store',
        'uses' => 'ProductCategoryController@store',
        'middleware' => 'can:product.productcategories.create'
    ]);
    $router->get('productcategories/{productcategory}/edit', [
        'as' => 'admin.product.productcategory.edit',
        'uses' => 'ProductCategoryController@edit',
        'middleware' => 'can:product.productcategories.edit'
    ]);
    $router->put('productcategories/{productcategory}', [
        'as' => 'admin.product.productcategory.update',
        'uses' => 'ProductCategoryController@update',
        'middleware' => 'can:product.productcategories.edit'
    ]);
    $router->delete('productcategories/{productcategory}', [
        'as' => 'admin.product.productcategory.destroy',
        'uses' => 'ProductCategoryController@destroy',
        'middleware' => 'can:product.productcategories.destroy'
    ]);
    /** End ProductCategory routes */
    $router->group(['prefix' => '/product/{product}'], function ($router) {

        $router->bind('productdetail', function ($id) {
            return app('Modules\Product\Repositories\ProductDetailRepository')->find($id);
        });
        $router->get('productdetails', [
            'as' => 'admin.product.productdetail.index',
            'uses' => 'ProductDetailController@index',
            'middleware' => 'can:product.productdetails.index'
        ]);
        $router->get('productdetails/create', [
            'as' => 'admin.product.productdetail.create',
            'uses' => 'ProductDetailController@create',
            'middleware' => 'can:product.productdetails.create'
        ]);
        $router->post('productdetails', [
            'as' => 'admin.product.productdetail.store',
            'uses' => 'ProductDetailController@store',
            'middleware' => 'can:product.productdetails.create'
        ]);
        $router->get('productdetails/{productdetail}/edit', [
            'as' => 'admin.product.productdetail.edit',
            'uses' => 'ProductDetailController@edit',
            'middleware' => 'can:product.productdetails.edit'
        ]);
        $router->put('productdetails/{productdetail}', [
            'as' => 'admin.product.productdetail.update',
            'uses' => 'ProductDetailController@update',
            'middleware' => 'can:product.productdetails.edit'
        ]);
        $router->delete('productdetails/{productdetail}', [
            'as' => 'admin.product.productdetail.destroy',
            'uses' => 'ProductDetailController@destroy',
            'middleware' => 'can:product.productdetails.destroy'
        ]);
    });

    // append

});
