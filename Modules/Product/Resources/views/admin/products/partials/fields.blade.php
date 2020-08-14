@php
$category_id = !empty($product) ? $product->category_id : old('category_id');
$name = !empty($product) ? $product->name : old('name');
$size_type = !empty($product) ? $product->size_type : old('size_type');
$quantity = !empty($product) ? $product->quantity : old('quantity');
$price = !empty($product) ? $product->price : old('price');
@endphp

<div class='form-group{{ $errors->has('category_id') ? ' has-error' : '' }}'>
    {!! Form::label('category_id', 'Category') !!}
    {!! Form::select('category_id', Modules\Product\Entities\ProductCategory::getAllCategories(), $category_id, ['class' => 'form-control', 'required' => 'required']) !!}
    {!! $errors->first('Category', '<span class="help-block">:message</span>') !!}
</div>

<div class='form-group{{ $errors->has('name') ? ' has-error' : '' }}'>
    {!! Form::label('name', 'Name') !!}
    {!! Form::text('name', $name, ['class' => 'form-control', 'placeholder' => 'Name']) !!}
    {!! $errors->first('Name', '<span class="help-block">:message</span>') !!}
</div>

<div class='form-group{{ $errors->has('size_type') ? ' has-error' : '' }}'>
    {!! Form::label('size_type', 'Size type') !!}
    {!! Form::select('size_type', Modules\Product\Entities\Product::getSizeTypes(), $size_type, ['class' => 'form-control']) !!}
    {!! $errors->first('Size type', '<span class="help-block">:message</span>') !!}
</div>

<div class='form-group{{ $errors->has('price') ? ' has-error' : '' }}'>
    {!! Form::label('price', 'Price') !!}
    {!! Form::number('price', $price, ['class' => 'form-control', 'placeholder' => 'Price']) !!}
    {!! $errors->first('Price', '<span class="help-block">:message</span>') !!}
</div>

<div class='form-group{{ $errors->has('image') ? ' has-error' : '' }}'>
    <label for="image">
        Image
    </label>
    @if($product)
    <div>
        <img src="{{ $product->getFilePath() }}" />
    </div>
    <p>
        <input type="checkbox" name="update_image"> Update image
    </p>
    @endif
    <input type="file" name="image">
    {!! $errors->first('Image', '<span class="help-block">:message</span>') !!}
</div>
