<?php

namespace App\Http\Controllers\Api;

use App\Models\Empresa;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FrontController extends Controller
{
    public function empresas(Request $request){
        $data = Empresa::orderByDesc("created_at")->take($request->quantity)->get(["id","nombre","descripcion"]);
        return response()->json($data, 200);
    }
    public function search(Request $request){
        $textBusqueda = $request->text;
        $data = Empresa::where("nombre", "like", "%" . $textBusqueda . "%")->get(["id","nombre","descripcion"]);
        return response()->json($data, 200);
    }
}
