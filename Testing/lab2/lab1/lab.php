<?php
function Factorial($number){
    if($number>=0 && gettype($number)==="integer"){
    $factorial = 1;
    for ($i = 1; $i <= $number; $i++){
      $factorial = $factorial * $i;
    }
    return $factorial;
    }else{
     return null;
    }
}
