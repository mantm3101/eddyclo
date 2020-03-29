<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

    public const SIZE_S = 's';
    public const SIZE_M = 'm';
    public const SIZE_L = 'l';
    public const SIZE_XL = 'xl';
    public const SIZE_XXL = 'xxl';

    public const SIZE_TYPE_NA = 1;
    public const SIZE_TYPE_NUMBER = 2;
    public const SIZE_TYPE_TEXT = 3;


    protected $table = 'product__products';

    protected $fillable = ['name', 'size_type', 'category_id', 'quantity', 'price'];

    public function details()
    {
        return $this->hasMany(ProductDetail::class, 'product_id', 'id');
    }

    public static function getTextSizes()
    {
        return [
            '' => '--Choose your size--',
            static::SIZE_S => 'S',
            static::SIZE_M => 'M',
            static::SIZE_L => 'L',
            static::SIZE_XL => 'XL',
            static::SIZE_XXL => 'XXL',
        ];
    }

    public static function getSizeTypes()
    {
        return [
            static::SIZE_TYPE_NA => 'N/A',
            static::SIZE_TYPE_NUMBER => 'NUMBER',
            static::SIZE_TYPE_TEXT => 'TEXT',
        ];
    }
}
