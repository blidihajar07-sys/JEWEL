<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable = [
        'order_id',
        'payment_method',
        'card_holder_name',
        'card_last4',
        'card_brand',
        'expiry_month',
        'expiry_year',
        'amount',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}