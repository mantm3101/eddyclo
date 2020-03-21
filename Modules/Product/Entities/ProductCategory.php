<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{

    protected $table = 'product__categories';

    protected $fillable = ['name', 'description', 'parent_id'];
}
