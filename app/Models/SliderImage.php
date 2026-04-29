<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SliderImage extends Model
{
    use HasFactory;
    protected $table = 'slider_images';
    protected $primaryKey = 'slider_img_id';
}
