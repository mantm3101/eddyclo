<?php

namespace Modules\Customer\Entities;

use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use Translatable;

    protected $table = 'customer__customers';
    public $translatedAttributes = [];
    protected $fillable = ['first_name', 'last_name', 'phone_number', 'address'];
}
