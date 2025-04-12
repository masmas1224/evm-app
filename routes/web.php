<?php

// use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

// use App\Http\Controllers\HelloController;

// Route::get('/hello', [HelloController::class, 'index']);

use Illuminate\Support\Facades\Route;

// 既存のルート
Route::get('/', function () {
    return view('welcome');
});

Route::get('/react', function () {
    return view('react'); // resources/views/react.blade.php に対応
});

use App\Http\Controllers\HelloController;
Route::get('/hello', [HelloController::class, 'index']);

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

Route::post('/record', function (Request $request) {
    $data = $request->json()->all();
    Log::info('AC登録データ', $data); // ログに見えるように

    DB::table('ac_records')->insert([
        'date' => $data['date'],
        'hours' => floatval($data['hours']),
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    return response()->json(['status' => 'ok']);
});
