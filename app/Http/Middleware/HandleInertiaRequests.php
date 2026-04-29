<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     * cartCount is shared globally so every page can show it in the Navbar.
     */
    public function share(Request $request): array
    {
        $cartCount = collect($request->session()->get('cart', []))
            ->sum('quantity');

        $wishlistData = \App\Models\Wishlist::where(function($query) {
            if (auth()->check()) {
                $query->where('user_id', auth()->id());
            } else {    
                $query->where('session_id', session()->getId());
            }
        })->get();

        $wishlistCount = $wishlistData->count();
        $wishlistProductIds = $wishlistData->pluck('product_id')->toArray();

        $cart = $request->session()->get('cart', []);
        $hydratedCart = [];
        foreach ($cart as $key => $item) {
            $product = \App\Models\Product::find($item['product_id']);
            if ($product) {
                $hydratedCart[$key] = [
                    'id' => $product->product_id,
                    'name' => $product->product_name,
                    'price' => $product->lkr_price,
                    'quantity' => $item['quantity'],
                    'size_name' => $item['size'] ?? 'N/A',
                ];
            }
        }

        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => [
                'success' => $request->session()->get('success'),
                'error'   => $request->session()->get('error'),
            ],
            'cartCount' => $cartCount,
            'cart' => $hydratedCart,
            'wishlistCount' => $wishlistCount,
            'wishlistProductIds' => $wishlistProductIds,
        ]);
    }
}
