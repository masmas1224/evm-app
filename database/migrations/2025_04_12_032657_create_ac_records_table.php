<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ac_records', function (Blueprint $table) {
            $table->id(); // そのままでOK！
            $table->date('date'); // ← 追加！
            $table->decimal('hours', 5, 2); // ← 追加！
            $table->timestamps(); // そのままでOK！
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ac_records');
    }
};
