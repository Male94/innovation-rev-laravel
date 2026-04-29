<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\SliderImage;
use App\Models\MainCat;
use App\Models\Product;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'sliderImages' => SliderImage::all(),
            'categories' => MainCat::with('subCats')->get(),
            'newArrivals' => Product::where('status', 1)->orderBy('created_at', 'desc')->limit(12)->get(),
            'onSale' => Product::where('status', 1)->where('discount_product', '>', 0)->limit(4)->get(),
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }
}
