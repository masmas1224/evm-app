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
use App\Http\Controllers\EvmController;

Route::post('/ac_record', [EvmController::class, 'evmAcIndex']);
Route::post('/pv_record', [EvmController::class, 'evmPvIndex']);
Route::post('/ev_record', [EvmController::class, 'evmEvIndex']);

// Route::post('/ac_record',function (Request $request) {
//     $data = $request->json()->all();
//     Log::info('AC登録データ', $data); // ログに見えるように
//     [EvmController::class, 'evmAcIndex']
// });
// Route::post('/pv_record',function (Request $request) {
//     $data = $request->json()->all();
//     Log::info('AC登録データ', $data); // ログに見えるように
//     [EvmController::class, 'evmPvIndex']
// });
// Route::post('/ev_record',function (Request $request) {
//     $data = $request->json()->all();
//     Log::info('AC登録データ', $data); // ログに見えるように
//     [EvmController::class, 'evmEvIndex']
// });

// Route::post('/ac_record', function (Request $request) {
//     $data = $request->json()->all();
//     Log::info('AC登録データ', $data); // ログに見えるように

//     $records = DB::table('evm')
//         ->where('date',  $data['date'])
//         ->get();

//     if ($records->isEmpty()) {
//         //insert
//         DB::table('evm')->insert([
//             'date' => $data['date'],
//             'acHours' => floatval($data['hours']),
//             'pvHours' => null,
//             'evHours' => null,
//             'created_at' => now(),
//             'updated_at' => now(),
//         ]);
//     }else{
//         //update
//         DB::table('evm')
//             ->where('date', $data['date'])
//             ->update(['acHours' => $data['hours']]);
//     }



//     return response()->json(['status' => 'ok']);
// });

// Route::post('/pv_record', function (Request $request) {
//     $data = $request->json()->all();
//     Log::info('PV登録データ', $data); // ログに見えるように

//     $records = DB::table('evm')
//         ->where('date',  $data['date'])
//         ->get();

//     if ($records->isEmpty()) {
//         //insert
//         DB::table('evm')->insert([
//             'date' =>  $data['date'],
//             'acHours' => null,
//             'pvHours' => floatval($data['hours']),
//             'evHours' => null,
//             'created_at' => now(),
//             'updated_at' => now(),
//         ]);
//     }else{
//         //update
//         DB::table('evm')
//             ->where('date', $data['date'])
//             ->update(['pvHours' => $data['hours']]);
//     }



//     return response()->json(['status' => 'ok']);
// });

// Route::post('/ev_record', function (Request $request) {
//     $data = $request->json()->all();
//     Log::info('EV登録データ', $data); // ログに見えるように

//     $records = DB::table('evm')
//         ->where('date',  $data['date'])
//         ->get();

//     if ($records->isEmpty()) {
//         //insert
//         DB::table('evm')->insert([
//             'date' =>  $data['date'],
//             'acHours' => null,
//             'pvHours' => null,
//             'evHours' => floatval($data['hours']),
//             'created_at' => now(),
//             'updated_at' => now(),
//         ]);
//     }else{
//         //update
//         DB::table('evm')
//             ->where('date', $data['date'])
//             ->update(['evHours' => $data['hours']]);
//     }



//     return response()->json(['status' => 'ok']);
// });
