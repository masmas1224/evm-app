<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class EvmChartService
{
    public function service(Request $request)
    {
        $data = $request->json()->all();
        Log::info('EVMチャートリクエスト', $data);

        //TODO 暫定全件取得
        $records = DB::table('evm')
            ->select('date', 'pvHours', 'acHours', 'evHours')
            ->orderBy('date')->get();

        return $records;
    }
}
