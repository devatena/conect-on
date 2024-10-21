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
        Schema::create('ajustments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('time_recording_id')->constrained()->onDelete('cascade');
            $table->string('old_change');
            $table->string('new_change');
            $table->string('justification');
            $table->boolean('approve')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ajustments');
    }
};
