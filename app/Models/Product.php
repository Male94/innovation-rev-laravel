<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';
    protected $primaryKey = 'product_id';

    protected $fillable = [
        'product_name',
        'product_description',
        'lkr_price',
        'usd_price',
        'pound_price',
        'discount_product',
        'sub_cat_id',
        'main_cat_id',
        'status',
    ];

    public function mainCat()
    {
        return $this->belongsTo(MainCat::class, 'main_cat_id');
    }

    public function subCat()
    {
        return $this->belongsTo(SubCat::class, 'sub_cat_id');
    }

    public function sizes()
    {
        return $this->belongsToMany(ProductSize::class, 'product_has_sizes', 'product_id', 'size_id');
    }

    public function colors()
    {
        return $this->hasMany(ProductColor::class, 'product_id');
    }
}
