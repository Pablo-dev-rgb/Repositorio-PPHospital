<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Models\Empresa;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class EmpresaController extends Controller
{
    //Obtener datos de usuario
     public function index(){
        $data = Empresa::whereUser_id(auth()->user()->id)->orderBy("orden")->get(["id", "orden", "nombre"]);
        return response()->json($data, 200);
    }

    //Guardar datos
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

        $data->user_id = auth()->user()->id;
        $data->save();
        return response()->json($data, 200);
    }

    //Buscar un empresa especifico
    public function show($id){
        $data = Empresa::find($id);
        return response()->json($data, 200);
    }

    //Actualizar empresa
    public function update(Request $request, $id){
        //validacion...
        $data = Empresa::find($id);
        //$data->fill($request->all());
        $data->nombre = $request->nombre;
        $data->email = $request->email;
        $data->telefono = $request->telefono;
        $data->direccion = $request->direccion;
        $data->website = $request->website;
        $data->facebook = $request->facebook;
        $data->youtube= $request->youtube;
        $data->tiktok = $request->tiktok;
        $data->descripcion = $request->descripcion;
        $data->orden = $request->orden;
        $data->categoria_id = $request->categoria_id;
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
}
