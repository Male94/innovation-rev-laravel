<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductSize;
use Inertia\Inertia;

class CartController extends Controller
{
    /** Return the session cart array */
    private function getCart(Request $request): array
    {
        return $request->session()->get('cart', []);
    }

    /** Display cart page */
    public function index(Request $request)
    {
        $cart = $this->getCart($request);

        // Hydrate products
        $items = [];
        foreach ($cart as $key => $item) {
            $product = Product::find($item['product_id']);
            if ($product) {
                $items[] = [
                    'key'          => $key,
                    'product_id'   => $product->product_id,
                    'product_name' => $product->product_name,
                    'lkr_price'    => $product->lkr_price,
                    'discount'     => $product->discount_product,
                    'size'         => $item['size'] ?? null,
                    'quantity'     => $item['quantity'],
                ];
            }
        }

        return Inertia::render('Cart', ['items' => $items]);
    }

    /** Add a product to the cart */
    public function add(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,product_id',
            'quantity'   => 'required|integer|min:1',
            'size'       => 'nullable|string',
        ]);

        $cart = $this->getCart($request);
        $key  = $request->product_id . '_' . ($request->size ?? 'no-size');

        if (isset($cart[$key])) {
            $cart[$key]['quantity'] += $request->quantity;
        } else {
            $cart[$key] = [
                'product_id' => $request->product_id,
                'quantity'   => $request->quantity,
                'size'       => $request->size,
            ];
        }

        $request->session()->put('cart', $cart);

        return back()->with('success', 'Item added to cart!');
    }

    /** Update quantity of a cart item */
    public function update(Request $request, string $key)
    {
        $request->validate(['quantity' => 'required|integer|min:1']);

        $cart = $this->getCart($request);
        if (isset($cart[$key])) {
            $cart[$key]['quantity'] = $request->quantity;
            $request->session()->put('cart', $cart);
        }

        return back();
    }

    /** Remove an item from the cart */
    public function remove(Request $request, string $key)
    {
        $cart = $this->getCart($request);
        unset($cart[$key]);
        $request->session()->put('cart', $cart);

        return back()->with('success', 'Item removed.');
    }
}
