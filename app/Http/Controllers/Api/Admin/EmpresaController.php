<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use App\Models\Empresa;
use Illuminate\Http\Request;

class EmpresaController extends Controller
{
     //Con esto estamos mostrando la lista de los usuarios
     public function index(){
        $data = Empresa::orderBy("orden")->get(["id", "orden", "nombre"]);
        return response()->json($data, 200);
    }

    public function store(Request $request){
        //aqui deberiamos agregar una validacion
        $data = new Empresa($request->all());
        //upload image base64
        if($request->urlfoto){
            $img = $request->urlfoto;
            //process cargado de img
            $folderPath = "img/empresa/";
            $image_parts = explode(";base64,", $img);
            $image_type_aux = explode("image/", $image_parts[0]);
            $image_type = $image_type_aux[1];
            $image_base64 = base64_decode($image_parts[1]);
            $file = $folderPath . Str::slug($request->nombre) . "." .$image_type;
            file_put_contents(public_path($file), $image_base64);

            //save img in DB
            $data->urlfoto = Str::slug($request->nombre) . "." .$image_type;
        }

        $data->save();
        return response()->json($data, 200);
    }

    //Buscar un usuario especifico
    public function show($id){
        $data = Empresa::find($id);
        return response()->json($data, 200);
    }

    //Actualizar usuario
    public function update(Request $request, $id){
        //validacion...
        $data = Empresa::find($id);
        $data->fill($request->all());
        //upload file
        if($request->file){
            $img = $request->file;
            //process cargado de img
            $folderPath = "img/empresa/";
            $image_parts = explode(";base64,", $img);
            $image_type_aux = explode("image/", $image_parts[0]);
            $image_type = $image_type_aux[1];
            $image_base64 = base64_decode($image_parts[1]);

            $file = $folderPath . Str::slug($request->nombre) . "." .$image_type;
            file_put_contents(public_path($file), $image_base64);
            //save img in DB
            $data->urlfoto = Str::slug($request->nombre) . "." .$image_type;
        }

        $data->save();
        return response()->json($data, 200);
    }

    public function destroy($id){
        $data = Empresa::find($id);
        $data->delete();
        return response()->json("Empresa borrada", 200);
    }
}
