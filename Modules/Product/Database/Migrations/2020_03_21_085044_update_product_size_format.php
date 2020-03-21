<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateProductSizeFormat extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product__products', function (Blueprint $table) {
            $table->dropColumn(['size']);
            $table->string('size_type');
            $table->string('description')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('product__products', function (Blueprint $table) {
            $table->string('size')->change();
            $table->dropColumn(['size_type', 'description']);
        });
    }
}
