<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Product;
use Inertia\Inertia;

class OrderController extends Controller
{
    /** Show the checkout form */
    public function checkout(Request $request)
    {
        $cart = $request->session()->get('cart', []);
        if (empty($cart)) {
            return redirect()->route('cart.index')->with('error', 'Your cart is empty.');
        }

        $items = [];
        $total = 0;
        foreach ($cart as $key => $item) {
            $product = Product::find($item['product_id']);
            if ($product) {
                $discount = $product->discount_product ?? 0;
                $price    = $product->lkr_price * (1 - $discount / 100);
                $subtotal = $price * $item['quantity'];
                $total   += $subtotal;

                $items[] = [
                    'key'          => $key,
                    'product_id'   => $product->product_id,
                    'product_name' => $product->product_name,
                    'price'        => round($price, 2),
                    'quantity'     => $item['quantity'],
                    'size'         => $item['size'] ?? null,
                    'subtotal'     => round($subtotal, 2),
                ];
            }
        }

        return Inertia::render('Checkout', [
            'items' => $items,
            'total' => round($total, 2),
        ]);
    }

    /** Place the order */
    public function store(Request $request)
    {
        $request->validate([
            'customer_name'  => 'required|string|max:255',
            'customer_email' => 'required|email',
            'customer_phone' => 'nullable|string|max:20',
            'address'        => 'nullable|string',
        ]);

        $cart = $request->session()->get('cart', []);
        if (empty($cart)) {
            return redirect()->route('cart.index');
        }

        $total = 0;
        $lineItems = [];

        foreach ($cart as $item) {
            $product  = Product::find($item['product_id']);
            if (!$product) continue;
            $discount = $product->discount_product ?? 0;
            $price    = $product->lkr_price * (1 - $discount / 100);
            $total   += $price * $item['quantity'];

            $lineItems[] = [
                'product_id' => $product->product_id,
                'quantity'   => $item['quantity'],
                'price'      => round($price, 2),
            ];
        }

        $order = Order::create([
            'user_id'        => auth()->id(),
            'customer_name'  => $request->customer_name,
            'customer_email' => $request->customer_email,
            'total_amount'   => round($total, 2),
            'status'         => 1,
        ]);

        foreach ($lineItems as $line) {
            OrderDetail::create([
                'order_id'   => $order->order_id,
                'product_id' => $line['product_id'],
                'quantity'   => $line['quantity'],
                'price'      => $line['price'],
            ]);
        }

        // Clear cart
        $request->session()->forget('cart');

        return Inertia::render('OrderSuccess', [
            'order' => $order,
        ]);
    }
}
