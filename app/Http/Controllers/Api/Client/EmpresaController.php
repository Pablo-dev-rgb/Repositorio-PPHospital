<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Models\Empresa;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;

class EmpresaController extends Controller
{
     public function index(){
        $data = Empresa::whereUser_id(auth()->user()->id)->orderBy("orden")->get(["id", "orden", "nombre"]);
        return response()->json($data, 200);
    }
}
