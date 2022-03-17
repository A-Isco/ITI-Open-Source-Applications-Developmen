<?php
class weather{

     function __construct(){
        require_once("View/egypt.php");
     }
    
    function get_weather($cityid){
        $apiurl="http://api.openweathermap.org/data/2.5/weather?q=".$cityid."&units=metric&APPID=773014a8fbb5ebdabd5f9236a47af88b";
        $ch=curl_init();
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
        curl_setopt($ch,CURLOPT_URL,$apiurl);
        curl_setopt($ch,CURLOPT_FOLLOWLOCATION,1);
        $response=curl_exec($ch);
        curl_close($ch);
        $data=json_decode($response,true);
        return $data;


    }
    function get_time(){
        $timestamp = time();
        
        echo "\n";
        echo(date( "D h:i A",$timestamp));
        echo "</br>";
        echo(date("d F, Y "));
        echo "</br>";
    }
    function displayinfo($data){
        echo("<h1>");
        echo( $data["name"]);
        echo("</h1>");
        echo("</br>");
       
        echo( $data['weather'][0]["description"]);
        
        echo("</br>");
        echo("</br>");
        echo("max temp:" .$data['main']['temp_min']."C");
        echo("</br>");
        echo("</br>");
        echo( "min temp:".$data['main']['temp_max']."C");
        echo("</br>");
        echo("</br>");
        echo("humidity:". $data['main']['humidity']."%");
        echo("</br>");
        echo("</br>");
        echo("wind:". $data['wind']['speed']."Km/h");
    }
}
