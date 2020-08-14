<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Transformers\ProductTransformer;
use Modules\Product\Entities\Product;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $products = Product::all();

        return $this->collection($products, new ProductTransformer);
    }
}
