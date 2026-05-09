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

    // CREATE ORDER
    public function store(Request $request)
    {

        $order = Order::create([
            'user_id' => $request->user()->id,

            'total_price' => $request->total_price,

            'shipping_address' => $request->shipping_address,

            'phone' => $request->phone,

            'payment_method' => $request->payment_method,

            'status' => 'pending',
        ]);

        foreach ($request->items as $item) {

            OrderItem::create([

                'order_id' => $order->id,

                'product_id' => $item['id'],

                'quantity' => $item['quantity'],

                'price' => $item['price'],

                'subtotal' =>
                    $item['price'] * $item['quantity'],
            ]);
        }

        return response()->json([
            'message' => 'Order created',
            'order' => $order
        ]);
    }
}