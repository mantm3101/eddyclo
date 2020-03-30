<?php

namespace Modules\Product\Entities;

use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class ProductDetail extends Model
{

    protected $table = 'product__productdetails';

    protected $fillable = ['product_id', 'quantity', 'size', 'product_id'];

    public function sizeToText()
    {
        if (empty($this->size)) {
            return;
        }

        if (is_numeric($this->size)) {
            return 'Size: ' . $this->size;
        } else {
            return Product::getTextSizes()[$this->size];
        }
    }
}
