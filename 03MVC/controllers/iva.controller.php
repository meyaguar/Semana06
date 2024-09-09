<?php
// Configuración de CORS (Cross-Origin Resource Sharing)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}

// Incluir el modelo de IVA
require_once('../models/iva.model.php');
error_reporting(0);
$iva = new IVA;

switch ($_GET["op"]) {
    // Procedimiento para cargar todos los valores de IVA
    case 'todos':
        $datos = array();
        $datos = $iva->todos();
        while ($row = mysqli_fetch_assoc($datos)) {
            $todosIVA[] = $row;
        }
        echo json_encode($todosIVA);
        break;

    // Puedes agregar otros casos como 'insertar', 'actualizar' y 'eliminar' si los necesitas
}
?>
