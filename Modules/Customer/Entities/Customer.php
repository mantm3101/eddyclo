<?php

namespace Modules\Customer\Entities;

use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{

    protected $table = 'customer__customers';

    protected $fillable = ['first_name', 'last_name', 'phone_number', 'address'];
}
