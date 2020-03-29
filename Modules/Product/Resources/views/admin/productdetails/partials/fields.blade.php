@php
$size = !empty($productdetail) ? $productdetail->size : old('size');
$quantity = !empty($productdetail) ? $productdetail->quantity : old('quantity');
@endphp

<div class="box-body">
    <div class="form-group">
        <label>Size</label>
        @if($product->size_type == \Modules\Product\Entities\Product::SIZE_TYPE_TEXT)
        {!! Form::select('size', Modules\Product\Entities\Product::getTextSizes(), $size , ['class' => 'form-control', 'required' => 'required']) !!}
        @else($product->size_type == \Modules\Product\Entities\Product::SIZE_TYPE_NUMBER)
        <input class="form-control" value="{{ $size }}" type="number" name="size">
        @endif
    </div>

    <div class="form-group">
        <label>Quantity</label>
        <input class="form-control" value="{{ $quantity }}" type="text" name="quantity">
    </div>
</div>