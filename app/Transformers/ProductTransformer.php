<?php

namespace App\Transformers;

use Illuminate\Support\Facades\Storage;
use League\Fractal\TransformerAbstract;
use Modules\Product\Entities\Product;

class ProductTransformer extends TransformerAbstract
{

    public function transform(Product $object)
    {
        return [
            'id' => $object->id,
            'name' => $object->name,
            'size_type' => $object->size_type,
            'category_id' => $object->category_id,
            'quantity' => $object->quantity,
            'price' => $object->price,
            'image' => Storage::disk('public')->url($object->getFilePath()),
        ];
    }
}
