<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\user;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request){

        $response = ["success"=>false];
         //validacion
         $validator = Validator::make($request->all(), [
            "name" => "required",
            "email" => "required|email",
            "password" => "required",
         ]);

         if($validator->fails()){
            $response = ["error" => $validator->errors()];
            return response()->json($response, 200);
         }
    
        $input = $request->all();
        $input ["password"] = bcrypt($input["password"]);

        $user = User::create($input);
        $user->assignRole("client");

        $response["success"] = true;
      //   $response["token"] = $user->createToken("PJ")->plainTextToken;

        return response()->json($response, 200);
    }

    public function login(Request $request){

        $response = ["success"=>false];
         //validacion
         $validator = Validator::make($request->all(), [
            "email" => "required|email",
            "password" => "required",
         ]);

         if($validator->fails()){
            $response = ["error" => $validator->errors()];
            return response()->json($response, 200);
         }

         if(Auth::attempt(["email" => $request->email, "password" => $request->password])){
            $user = Auth::User();
            $user->hasRole('admin');

            $response["token"] = $user->createToken("PJ")->plainTextToken;
            $response["user"] = $user;
            $response["message"] = "Logueado";
            $response["success"] = true;  
         }

         return response()->json($response, 200);
    }

    public function logout(Request $request){

      $response = ["success"=>false];
      $request->session()->invalidate();
      $request->session()->regenerateToken();
      $response = ["success"=>true, "message" => "Sesion cerrada."];
      
      return response()->json($response, 200);
    }
}
