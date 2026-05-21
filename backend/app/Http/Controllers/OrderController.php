<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\Payment;

class OrderController extends Controller
{
    // USER ORDERS
    public function index(Request $request)
    {
        return Order::with('items.product')
            ->where('user_id', $request->user()->id)
            ->latest()
            ->get();
    }

    // ADMIN ALL ORDERS
    public function allOrders(Request $request)
    {
        if ($request->user()->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

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
        $product = Product::find($item['id']);

        if (!$product) continue;

        if ($product->stock < $item['quantity']) {
            return response()->json([
                'message' => "Not enough stock for {$product->name}"
            ], 400);
        }

        $product->stock -= $item['quantity'];
        $product->save();

        OrderItem::create([
            'order_id' => $order->id,
            'product_id' => $item['id'],
            'quantity' => $item['quantity'],
            'price' => $product->price,
            'subtotal' => $product->price * $item['quantity'],
        ]);
    }

    // PAYMENT
    if (strtolower($request->payment_method) === 'card') {

        $cardNumber = $request->card_number;

        Payment::create([
            'order_id' => $order->id,
            'payment_method' => 'Card',
            'card_holder_name' => $request->card_holder_name,
            'card_last4' => substr($cardNumber, -4),
            'card_brand' => null,
            'expiry_month' => $request->expiry_month,
            'expiry_year' => $request->expiry_year,
            'amount' => $request->total_price,
        ]);
    }

    return response()->json([
        'message' => 'Order created',
        'order' => $order
    ]);
}

    // UPDATE STATUS
    public function updateStatus(Request $request, $id)
    {
        if ($request->user()->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $request->validate([
            'status' => 'required|in:pending,paid,shipped,delivered,cancelled'
        ]);

        $order = Order::findOrFail($id);
        $order->status = $request->status;
        $order->save();

        return response()->json([
            'message' => 'Order status updated',
            'order' => $order
        ]);
    }

    // DASHBOARD
    public function dashboard(Request $request)
    {
        if ($request->user()->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        return response()->json([
            'products' => Product::count(),
            'orders' => Order::count(),
            'revenue' => Order::where('status', '!=', 'cancelled')->sum('total_price'),
            'latestOrders' => Order::with('user')->latest()->take(5)->get(),
        ]);
    }

    // STATS
    public function stats(Request $request)
    {
        if ($request->user()->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        return [
            'products' => Product::count(),
            'orders' => Order::count(),
            'revenue' => Order::where('status', '!=', 'cancelled')->sum('total_price'),
        ];
    }
}