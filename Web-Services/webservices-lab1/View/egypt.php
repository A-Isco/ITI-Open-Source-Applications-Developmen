
<?php
require_once ("vendor/autoload.php");

ini_set("memory_limit",-1);

$cities=file_get_contents("resources/city.list.json");
$cities_json=json_decode($cities,true);
echo "<form  method='POST'>
    <select name='city_name'>";

foreach($cities_json as $item){
        if ($item["country"] == "EG"){
             $id=$item['id'];
             $name=$item['name'];
            echo "<option name=$id>$name</option>";
        }
     }
     echo "   </select>
     <input type='submit' value=' Get Weather' name='submit'>
            </form>"


?>