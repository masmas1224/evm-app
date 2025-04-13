<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\EvmAcService;
use App\Services\EvmPvService;
use App\Services\EvmEvService;
use Illuminate\Support\Facades\Log;

class EvmController extends Controller
{

    protected $acService;
    protected $pvService;
    protected $evService;

    public function __construct(
        EvmAcService $acService,
        EvmPvService $pvService,
        EvmEvService $evService
      )
    {
        $this->acService = $acService;
        $this->pvService = $pvService;
        $this->evService = $evService;
    }

    public function evmAcIndex(Request $request)
    {
        // Log::info('AC登録データ', $request);
        $this->acService->service($request);
        return response()->json(['status' => 'ok']);
    }
    public function evmPvIndex(Request $request)
    {
        // Log::info('AC登録データ', $request);
        $this->pvService->service($request);
        return response()->json(['status' => 'ok']);
    }
    public function evmEvIndex(Request $request)
    {
        // Log::info('AC登録データ', $request);
        $this->evService->service($request);
        return response()->json(['status' => 'ok']);
    }
}
