@php
$name = !empty($productcategory) ? $productcategory->name : old('name');
$description = !empty($productcategory) ? $productcategory->description : old('description');
@endphp

<div class='form-group{{ $errors->has('name') ? ' has-error' : '' }}'>
    {!! Form::label('name', 'Name') !!}
    {!! Form::text('name', $name, ['class' => 'form-control', 'placeholder' => 'Name']) !!}
    {!! $errors->first('Name', '<span class="help-block">:message</span>') !!}
</div>

<div class='form-group{{ $errors->has('description') ? ' has-error' : '' }}'>
    {!! Form::label('description', 'Description') !!}
    {!! Form::text('description', $description, ['class' => 'form-control', 'placeholder' => 'Description']) !!}
    {!! $errors->first('Description', '<span class="help-block">:message</span>') !!}
</div>