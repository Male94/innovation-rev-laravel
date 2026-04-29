<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Auth;

class WishlistController extends Controller
{
    public function index()
    {
        $wishlistItems = Wishlist::with('product.subCat')
            ->where(function($query) {
                if (Auth::check()) {
                    $query->where('user_id', Auth::id());
                } else {
                    $query->where('session_id', Session::getId());
                }
            })
            ->get();

        return Inertia::render('Wishlist', [
            'wishlist' => $wishlistItems
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,product_id',
        ]);

        $userId = Auth::id();
        $sessionId = Session::getId();

        $exists = Wishlist::where('product_id', $request->product_id)
            ->where(function($query) use ($userId, $sessionId) {
                if ($userId) {
                    $query->where('user_id', $userId);
                } else {
                    $query->where('session_id', $sessionId);
                }
            })
            ->exists();

        if (!$exists) {
            Wishlist::create([
                'user_id' => $userId,
                'session_id' => $userId ? null : $sessionId,
                'product_id' => $request->product_id,
            ]);
        }

        return back();
    }

    public function destroy($id)
    {
        $wishlist = Wishlist::findOrFail($id);
        
        // Security check
        if (Auth::check()) {
            if ($wishlist->user_id !== Auth::id()) abort(403);
        } else {
            if ($wishlist->session_id !== Session::getId()) abort(403);
        }

        $wishlist->delete();

        return back();
    }
}
