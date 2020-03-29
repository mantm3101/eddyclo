<?php

namespace Modules\Product\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Modules\Product\Entities\ProductDetail;
use Modules\Product\Http\Requests\CreateProductDetailRequest;
use Modules\Product\Http\Requests\UpdateProductDetailRequest;
use Modules\Product\Repositories\ProductDetailRepository;
use Modules\Core\Http\Controllers\Admin\AdminBaseController;
use Modules\Product\Entities\Product;

class ProductDetailController extends AdminBaseController
{
    /**
     * @var ProductDetailRepository
     */
    private $productdetail;

    public function __construct(ProductDetailRepository $productdetail)
    {
        parent::__construct();

        $this->productdetail = $productdetail;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Product $product)
    {
        //$productdetails = $this->productdetail->all();

        return view('product::admin.productdetails.index', compact(''));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create(Product $product)
    {
        return view('product::admin.productdetails.create', compact('product'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  CreateProductDetailRequest $request
     * @return Response
     */
    public function store(Product $product, CreateProductDetailRequest $request)
    {
        $product->details()->create(
            $request->all()
        );

        return redirect()->route('admin.product.product.edit', $product->id)
            ->withSuccess(trans('core::core.messages.resource created', ['name' => trans('product::productdetails.title.productdetails')]));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  ProductDetail $productdetail
     * @return Response
     */
    public function edit(Product $product, ProductDetail $productdetail)
    {
        if ($productdetail->product_id != $product->id) {
            return redirect()->back()->withErrors('No permission');
        }
        return view('product::admin.productdetails.edit', compact('product', 'productdetail'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ProductDetail $productdetail
     * @param  UpdateProductDetailRequest $request
     * @return Response
     */
    public function update(Product $product, ProductDetail $productdetail, UpdateProductDetailRequest $request)
    {
        if ($productdetail->product_id != $product->id) {
            return redirect()->back()->withErrors('No permission');
        }

        $this->productdetail->update($productdetail, $request->all());

        return redirect()->route('admin.product.product.edit', $product->id)
            ->withSuccess(trans('core::core.messages.resource updated', ['name' => trans('product::productdetails.title.productdetails')]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  ProductDetail $productdetail
     * @return Response
     */
    public function destroy(Product $product, ProductDetail $productdetail)
    {
        if ($productdetail->product_id != $product->id) {
            return redirect()->back()->withErrors('No permission');
        }

        $this->productdetail->destroy($productdetail);

        return redirect()->route('admin.product.product.edit', $product->id)
            ->withSuccess(trans('core::core.messages.resource deleted', ['name' => trans('product::productdetails.title.productdetails')]));
    }
}
