<?php

namespace Modules\Product\Entities;

use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{

    protected $table = 'product__categories';

    protected $fillable = ['name', 'description', 'parent_id'];

    public static function getAllCategories()
    {
        return [
            "" => '--Choose category for your product--',
        ]  + static::all()->pluck('name', 'id')->toArray();
    }
}
