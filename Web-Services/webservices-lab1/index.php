<?php
require_once ("vendor/autoload.php");
$weather =new weather();
if(isset($_POST["submit"])){
    
    $data=$weather->get_weather($_POST["city_name"]);
    $weather->get_time();
    $weather->displayinfo($data);
   
}


?>