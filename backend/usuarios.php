<?php

namespace App\usuarios;
require "../vendor/autoload.php";

use App\Controller\UsuarioController;

$user = new UsuarioController();

$body = json_decode(file_get_contents('php://input'), true);


$id=isset($_GET['id'])?$_GET['id']:'';
switch($_SERVER["REQUEST_METHOD"]){
    case "POST";
        $resultado = $user->insert($body);
        
        echo json_encode(['status'=>$resultado]);
    break;
    case "GET";
        if(!isset($_GET['id'])){
            $resultado = $user->select();
            echo json_encode(["usuarios"=>$resultado]);
        }else{
            $resultado = $user->selectId($id);
            echo json_encode(["status"=>true,"usuarios"=>$resultado[0]]);
        }
       
    break;
    case "PUT";
        $resultado = $user->update($body,intval($_GET['id']));
        echo json_encode(['status'=>$resultado]);
    break;
    case "DELETE";
        $resultado = $user->delete(intval($_GET['id']));
        echo json_encode(['status'=>$resultado]);
    break;  
}