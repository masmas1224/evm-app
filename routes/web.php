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
