<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MainCat extends Model
{
    use HasFactory;

    protected $table = 'main_cats';
    protected $primaryKey = 'main_cat_id';

    public function subCats()
    {
        return $this->hasMany(SubCat::class, 'main_cat_id');
    }

    public function products()
    {
        return $this->hasMany(Product::class, 'main_cat_id');
    }
}
