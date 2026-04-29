<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Product;
use App\Models\MainCat;
use App\Models\SubCat;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::where('status', 1);

        if ($request->has('search')) {
            $searchTerm = $request->search;
            $query->where(function($q) use ($searchTerm) {
                $q->where('product_name', 'LIKE', "%{$searchTerm}%")
                  ->orWhere('product_description', 'LIKE', "%{$searchTerm}%");
            });
        }

        if ($request->has('catId')) {
            $query->where('main_cat_id', $request->catId);
        }

        if ($request->has('subCatId')) {
            $query->where('sub_cat_id', $request->subCatId);
        }

        return Inertia::render('Shop/Index', [
            'products' => $query->with(['mainCat', 'subCat', 'sizes', 'colors'])->paginate(12),
            'categories' => MainCat::with('subCats')->get(),
            'filters' => $request->only(['search', 'catId', 'subCatId']),
        ]);
    }

    public function show(Product $product)
    {
        return Inertia::render('Shop/Show', [
            'product' => $product->load(['mainCat', 'subCat', 'sizes', 'colors']),
        ]);
    }
}
