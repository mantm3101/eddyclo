<div class='form-group{{ $errors->has('name') ? ' has-error' : '' }}'>
    {!! Form::label('name', 'Name') !!}
    {!! Form::text('name', old('name'), ['class' => 'form-control', 'placeholder' => 'Name']) !!}
    {!! $errors->first('Name', '<span class="help-block">:message</span>') !!}
</div>

<div class='form-group{{ $errors->has('size') ? ' has-error' : '' }}'>
    {!! Form::label('size', 'Size') !!}
    {!! Form::select('size', Modules\Product\Entities\Product::getSizes(), old('size'), ['class' => 'form-control']) !!}
    {!! $errors->first('Size', '<span class="help-block">:message</span>') !!}
</div>

<div class='form-group{{ $errors->has('quantity') ? ' has-error' : '' }}'>
    {!! Form::label('quantity', 'Quantity') !!}
    {!! Form::number('quantity', old('quantity'), ['class' => 'form-control', 'placeholder' => 'Quantity']) !!}
    {!! $errors->first('Quantity', '<span class="help-block">:message</span>') !!}
</div>

<div class='form-group{{ $errors->has('price') ? ' has-error' : '' }}'>
    {!! Form::label('price', 'Price') !!}
    {!! Form::number('price', old('price'), ['class' => 'form-control', 'placeholder' => 'Price']) !!}
    {!! $errors->first('Price', '<span class="help-block">:message</span>') !!}
</div>