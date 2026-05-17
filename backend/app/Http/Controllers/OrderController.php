<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Order;
use App\Models\OrderItem;

class OrderController extends Controller
{
    // GET ORDERS
    public function index(Request $request)
    {
        return Order::with('items.product')
            ->where('user_id', $request->user()->id)
            ->get();
    }

    public function allOrders()
    {
        return Order::with('items.product', 'user')
            ->latest()
            ->get();
    }

    // CREATE ORDER
    public function store(Request $request)
    {
        $request->validate([
          'total_price' => 'required',
          'shipping_address' => 'required',
          'phone' => 'required',
          'payment_method' => 'required',
          'items' => 'required|array',
        ]);

        $order = Order::create([
          'user_id' => $request->user()->id,
          'total_price' => $request->total_price,
          'shipping_address' => $request->shipping_address,
          'phone' => $request->phone,
          'payment_method' => $request->payment_method,
          'status' => 'pending',
        ]);

        foreach ($request->items as $item) {

          $product = \App\Models\Product::find($item['id']);

          if (!$product) continue;

          // ❌ prevent negative stock
          if ($product->stock < $item['quantity']) {
            return response()->json([
                'message' => "Not enough stock for {$product->name}"
            ], 400);
          }

          // decrease stock
          $product->stock -= $item['quantity'];
          $product->save();

          OrderItem::create([
            'order_id' => $order->id,
            'product_id' => $item['id'],
            'quantity' => $item['quantity'],
            'price' => $item['price'],
            'subtotal' => $item['price'] * $item['quantity'],
          ]);
        }

      return response()->json([
        'message' => 'Order created',
        'order' => $order
      ]);
    }
};