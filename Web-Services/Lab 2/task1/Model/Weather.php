<?php

class Weather implements Weather_Interface {

    private $url;

    public function __construct() {
       
    }

    public function get_cities() {
        $egyption_cities = [];
        $cities = file_get_contents(__CITIES_FILE);
        $cities = json_decode($cities,true);
        foreach ($cities as $city) {
            if (strtolower($city['country']) === 'eg') {
              $egyption_cities[] = $city;
            }
          }
        return $egyption_cities;
    }

    public function get_weather($cityid) {
        $apiurl="http://api.openweathermap.org/data/2.5/weather?q=".$cityid."&units=metric&APPID=b91b5d3130ddd4aaef30a2d03255e16d";
        $client = new \GuzzleHttp\Client();
        $response = $client->get($apiurl);
        $inData=json_decode($response->getBody(),true);
        return $inData;

    }

    public function get_current_time() {
        $timestamp = time();
        echo date("D h:i A",$timestamp)."</br>".date("d F, Y ")."</br>";
    }

}
