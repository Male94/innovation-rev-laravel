<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCat extends Model
{
    use HasFactory;

    protected $table = 'sub_cats';
    protected $primaryKey = 'sub_cat_id';

    public function mainCat()
    {
        return $this->belongsTo(MainCat::class, 'main_cat_id');
    }

    public function products()
    {
        return $this->hasMany(Product::class, 'sub_cat_id');
    }
}
