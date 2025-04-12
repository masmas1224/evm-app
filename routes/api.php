<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

Route::post('/ac-record', function (Request $request) {
    $data = $request->json()->all();
    Log::info('AC登録データ', $data);

    DB::table('ac_records')->insert([
        'date' => $data['date'],
        'hours' => floatval($data['hours']),
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    return response()->json(['status' => 'ok']);
});
