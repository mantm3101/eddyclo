<div class='form-group{{ $errors->has('first_name') ? ' has-error' : '' }}'>
    {!! Form::label('first_name', 'First name') !!}
    {!! Form::text('first_name', $customer->first_name, ['class' => 'form-control', 'placeholder' => 'First name']) !!}
    {!! $errors->first('First name', '<span class="help-block">:message</span>') !!}
</div>

<div class='form-group{{ $errors->has('last_name') ? ' has-error' : '' }}'>
    {!! Form::label('last_name', 'Last name') !!}
    {!! Form::text('last_name', $customer->last_name, ['class' => 'form-control', 'placeholder' => 'Last name']) !!}
    {!! $errors->first('Last name', '<span class="help-block">:message</span>') !!}
</div>

<div class='form-group{{ $errors->has('phone_number') ? ' has-error' : '' }}'>
    {!! Form::label('phone_number', 'Phone number') !!}
    {!! Form::number('phone_number', $customer->phone_number, ['class' => 'form-control', 'placeholder' => 'Phone number']) !!}
    {!! $errors->first('Phone number', '<span class="help-block">:message</span>') !!}
</div>

<div class='form-group{{ $errors->has('address') ? ' has-error' : '' }}'>
    {!! Form::label('address', 'Address') !!}
    {!! Form::text('address', $customer->address, ['class' => 'form-control', 'placeholder' => 'Address']) !!}
    {!! $errors->first('Address', '<span class="help-block">:message</span>') !!}
</div>