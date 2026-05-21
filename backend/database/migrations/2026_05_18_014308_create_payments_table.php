<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();

            $table->foreignId('order_id')->constrained()->onDelete('cascade');

            $table->string('payment_method'); // card / cash

            // Card fields (ONLY if card is used)
            $table->string('card_holder_name')->nullable();
            $table->string('card_last4')->nullable();
            $table->string('card_brand')->nullable(); // visa/mastercard
            $table->string('expiry_month')->nullable();
            $table->string('expiry_year')->nullable();

            $table->decimal('amount', 10, 2);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};