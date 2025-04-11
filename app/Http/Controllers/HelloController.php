<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
    public function index()
    {
        $message = "やっほー！Laravelちゃんと動いてるよ〜！";
        return view('hello', ['message' => $message]);
    }
}
