<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class EvmEvService
{
    public function service(Request $request)
    {
        $data = $request->json()->all();
        Log::info('EV登録データ', $data);

        $records = DB::table('evm')
            ->where('date',  $data['date'])
            ->get();

        if ($records->isEmpty()) {
            //insert
            DB::table('evm')->insert([
                'date' =>  $data['date'],
                'acHours' => null,
                'pvHours' => null,
                'evHours' => floatval($data['hours']),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }else{
            //update
            DB::table('evm')
                ->where('date', $data['date'])
                ->update(['evHours' => $data['hours']]);
        }



        return response()->json(['status' => 'ok']);
    }
}
