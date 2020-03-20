<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

    protected $table = 'product__products';

    protected $fillable = ['name', 'size', 'quantity', 'price'];
}
