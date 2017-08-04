<?php

include ("conexion.php");

if (isset($_POST ['g-recaptcha-response']) && $_POST ['g-recaptcha-response']) 
{
	var_dump($_POST ['g-recaptcha-response']);
}else
{
	echo ("error");
}

/*$mysql = mysqli_connect($server, $user, $pass) or die("Problemas al conectar");

mysqli_select_db($mysql, $db);
$tildes = $mysql->query("SET NAMES 'utf8'");//Para que se inserten las tildes correctamente

$nombre     = $_POST['nombre'];
$celular    = $_POST['celular'];
$email      = $_POST['email'];
$tipoM      = $_POST['tipoM'];
$cantidad   = $_POST['cantidad'];
$frecuencia = $_POST['frecuencia'];
$recaptcha = $_POST ['g-recaptcha-response'];



/*if (mysqli_query($mysql, "INSERT INTO usuario (nombre, celular, email, tipoMascota, cantidad, frecuencia) VALUES ('$nombre', '$celular', '$email', '$tipoM', '$cantidad', '$frecuencia' )")) {
	mysqli_close($mysql);

	//header("location:gracias.html");

} else {
	echo "No se guardo el registro, por favor intente nuevamente...!!!";
}*/

?>















