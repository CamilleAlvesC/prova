<?php
namespace App\Test;
require "../vendor/autoload.php";

use App\Controller\ProdutoController;
use App\Controller\UsuarioController;
use App\Model\Model;


$users = new UsuarioController();
$produtos = new ProdutoController();

$db = new Model();
