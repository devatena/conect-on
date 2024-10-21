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
        Schema::table('time_recordings', function (Blueprint $table) {
            $table->enum('adjustment',['sent', 'approved', 'refused'])->nullable()->after('hour_complete'); // Adicionando a coluna 'adjustment'
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {

    }
};
