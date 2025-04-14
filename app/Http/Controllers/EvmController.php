<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\EvmAcService;
use App\Services\EvmPvService;
use App\Services\EvmEvService;
use App\Services\EvmChartService;
use Illuminate\Support\Facades\Log;

class EvmController extends Controller
{

    protected $acService;
    protected $pvService;
    protected $evService;
    protected $evmChartService;

    public function __construct(
        EvmAcService $acService,
        EvmPvService $pvService,
        EvmEvService $evService,
        EvmChartService $evmChartService,
      )
    {
        $this->acService = $acService;
        $this->pvService = $pvService;
        $this->evService = $evService;
        $this->evmChartService= $evmChartService;
    }

    public function evmAcIndex(Request $request)
    {
        try {
            $this->acService->service($request);
            return response()->json(['status' => 'ok']);
        } catch (\Throwable $e) {
            return response()->json(['status' => 'ng']);
        }
    }
    public function evmPvIndex(Request $request)
    {
        try {
            $this->pvService->service($request);
            return response()->json(['status' => 'ok']);
        } catch (\Throwable $e) {
            return response()->json(['status' => 'ng']);
        }
    }
    public function evmEvIndex(Request $request)
    {
        try {
            $this->evService->service($request);
            return response()->json(['status' => 'ok']);
        } catch (\Throwable $e) {
            return response()->json(['status' => 'ng']);
        }
    }
    public function evmChart(Request $request){
        try {
            $data=$this->evmChartService->service($request);
            return response()->json(['status' => 'ok',
            'data' =>$data]);
        } catch (\Throwable $e) {
            return response()->json(['status' => 'ng']);
        }
    }

}
