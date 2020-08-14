<?php

namespace Modules\Product\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Modules\Product\Entities\Product;
use Modules\Product\Http\Requests\CreateProductRequest;
use Modules\Product\Http\Requests\UpdateProductRequest;
use Modules\Product\Repositories\ProductRepository;
use Modules\Core\Http\Controllers\Admin\AdminBaseController;
use Modules\Product\Entities\ProductCategory;
use Modules\Product\Http\Requests\CreateProductDetailRequest;
use Symfony\Component\HttpFoundation\File\Exception\ExtensionFileException;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class ProductController extends AdminBaseController
{
    /**
     * @var ProductRepository
     */
    private $product;

    public function __construct(ProductRepository $product)
    {
        parent::__construct();

        $this->product = $product;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $products = $this->product->all();

        return view('product::admin.products.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('product::admin.products.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  CreateProductRequest $request
     * @return Response
     */
    public function store(CreateProductRequest $request)
    {
        $file = $request->file('image');
        $data = $request->input();
        if ($file) {
            $fileExtension = $file->getClientOriginalExtension();
            if (!in_array($fileExtension, ['png', 'jpg', 'jpeg'])) {
                throw new ExtensionFileException();
            }

            $fileName = time() . ".$fileExtension";

            $file->storeAs(Product::ROOT_IMAGE_PATH, $fileName, 'public');

            $data['image'] = $fileName;
        }

        $product = $this->product->create($data);

        return redirect()->route('admin.product.product.edit', $product->id)
            ->withSuccess(trans('core::core.messages.resource created', ['name' => trans('product::products.title.products')]));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Product $product
     * @return Response
     */
    public function edit(Product $product)
    {
        $product->load('details');
        return view('product::admin.products.edit', compact('product'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Product $product
     * @param  UpdateProductRequest $request
     * @return Response
     */
    public function update(Product $product, UpdateProductRequest $request)
    {
        $file = $request->file('image');
        $data = $request->except('size_type', 'update_image');
        if ($request->input('update_image', false) && $file) {
            $fileExtension = $file->getClientOriginalExtension();
            if (!in_array($fileExtension, ['png', 'jpg', 'jpeg'])) {
                throw new ExtensionFileException();
            }

            $fileName = time() . ".$fileExtension";

            $file->storeAs(Product::ROOT_IMAGE_PATH, $fileName, 'public');

            $data = $request->input();
            $data['image'] = $fileName;
        }


        $this->product->update($product, $data);

        return redirect()->route('admin.product.product.edit', $product->id)
            ->withSuccess(trans('core::core.messages.resource updated', ['name' => trans('product::products.title.products')]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Product $product
     * @return Response
     */
    public function destroy(Product $product)
    {
        $this->product->destroy($product);

        return redirect()->route('admin.product.product.index')
            ->withSuccess(trans('core::core.messages.resource deleted', ['name' => trans('product::products.title.products')]));
    }
}
