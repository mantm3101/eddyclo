<?php

namespace Modules\Product\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Modules\Product\Entities\ProductCategory;
use Modules\Product\Http\Requests\CreateProductCategoryRequest;
use Modules\Product\Http\Requests\UpdateProductCategoryRequest;
use Modules\Product\Repositories\ProductCategoryRepository;
use Modules\Core\Http\Controllers\Admin\AdminBaseController;

class ProductCategoryController extends AdminBaseController
{
    /**
     * @var ProductCategoryRepository
     */
    private $productcategory;

    public function __construct(ProductCategoryRepository $productcategory)
    {
        parent::__construct();

        $this->productcategory = $productcategory;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $productcategories = $this->productcategory->all();

        return view('product::admin.productcategories.index', compact('productcategories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('product::admin.productcategories.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  CreateProductCategoryRequest $request
     * @return Response
     */
    public function store(CreateProductCategoryRequest $request)
    {
        $this->productcategory->create($request->all());

        return redirect()->route('admin.product.productcategory.index')
            ->withSuccess(trans('core::core.messages.resource created', ['name' => trans('product::productcategories.title.productcategories')]));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  ProductCategory $productcategory
     * @return Response
     */
    public function edit(ProductCategory $productcategory)
    {
        return view('product::admin.productcategories.edit', compact('productcategory'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ProductCategory $productcategory
     * @param  UpdateProductCategoryRequest $request
     * @return Response
     */
    public function update(ProductCategory $productcategory, UpdateProductCategoryRequest $request)
    {
        $this->productcategory->update($productcategory, $request->all());

        return redirect()->route('admin.product.productcategory.index')
            ->withSuccess(trans('core::core.messages.resource updated', ['name' => trans('product::productcategories.title.productcategories')]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  ProductCategory $productcategory
     * @return Response
     */
    public function destroy(ProductCategory $productcategory)
    {
        $this->productcategory->destroy($productcategory);

        return redirect()->route('admin.product.productcategory.index')
            ->withSuccess(trans('core::core.messages.resource deleted', ['name' => trans('product::productcategories.title.productcategories')]));
    }
}
