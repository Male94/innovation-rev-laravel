<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('main_cats', function (Blueprint $table) {
            $table->id('main_cat_id');
            $table->string('main_cat_name');
            $table->timestamps();
        });

        Schema::create('sub_cats', function (Blueprint $table) {
            $table->id('sub_cat_id');
            $table->string('sub_cat_name');
            $table->foreignId('main_cat_id')->constrained('main_cats', 'main_cat_id');
            $table->integer('order')->default(0);
            $table->integer('status')->default(1);
            $table->timestamps();
        });

        Schema::create('products', function (Blueprint $table) {
            $table->id('product_id');
            $table->string('product_name');
            $table->text('product_description')->nullable();
            $table->decimal('lkr_price', 10, 2);
            $table->decimal('usd_price', 10, 2)->nullable();
            $table->decimal('pound_price', 10, 2)->nullable();
            $table->integer('discount_product')->default(0);
            $table->foreignId('sub_cat_id')->constrained('sub_cats', 'sub_cat_id');
            $table->foreignId('main_cat_id')->constrained('main_cats', 'main_cat_id');
            $table->integer('status')->default(1);
            $table->timestamps();
        });

        Schema::create('product_sizes', function (Blueprint $table) {
            $table->id('product_size_id');
            $table->string('product_size');
            $table->timestamps();
        });

        Schema::create('product_colors', function (Blueprint $table) {
            $table->id('product_color_id');
            $table->string('product_color_name');
            $table->timestamps();
        });

        Schema::create('product_has_sizes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products', 'product_id');
            $table->foreignId('size_id')->constrained('product_sizes', 'product_size_id');
            $table->timestamps();
        });

        Schema::create('slider_images', function (Blueprint $table) {
            $table->id('slider_img_id');
            $table->string('image_path');
            $table->timestamps();
        });

        Schema::create('orders', function (Blueprint $table) {
            $table->id('order_id');
            $table->foreignId('user_id')->nullable()->constrained();
            $table->string('customer_name')->nullable();
            $table->string('customer_email')->nullable();
            $table->decimal('total_amount', 10, 2);
            $table->integer('status')->default(1);
            $table->timestamps();
        });

        Schema::create('order_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained('orders', 'order_id');
            $table->foreignId('product_id')->constrained('products', 'product_id');
            $table->integer('quantity');
            $table->decimal('price', 10, 2);
            $table->foreignId('size_id')->nullable()->constrained('product_sizes', 'product_size_id');
            $table->foreignId('color_id')->nullable()->constrained('product_colors', 'product_color_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_details');
        Schema::dropIfExists('orders');
        Schema::dropIfExists('slider_images');
        Schema::dropIfExists('product_has_sizes');
        Schema::dropIfExists('product_colors');
        Schema::dropIfExists('product_sizes');
        Schema::dropIfExists('products');
        Schema::dropIfExists('sub_cats');
        Schema::dropIfExists('main_cats');
    }
};
