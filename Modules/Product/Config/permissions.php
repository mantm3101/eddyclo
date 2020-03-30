<?php

return [
    'product.products' => [
        'index' => 'product::products.list resource',
        'create' => 'product::products.create resource',
        'edit' => 'product::products.edit resource',
        'destroy' => 'product::products.destroy resource',
    ],
    'product.productcategories' => [
        'index' => 'product::productcategories.list resource',
        'create' => 'product::productcategories.create resource',
        'edit' => 'product::productcategories.edit resource',
        'destroy' => 'product::productcategories.destroy resource',
    ],
    'product.productdetails' => [
        'index' => 'product::productdetails.list resource',
        'create' => 'product::productdetails.create resource',
        'edit' => 'product::productdetails.edit resource',
        'destroy' => 'product::productdetails.destroy resource',
    ],
    // append



];
