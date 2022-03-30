<?php
class User{
  private $name;
  private $email;

  public function __construct($n,$e){
    $this->name = $n;
    $this->email = $e;
  }

  public function getName(){
    return $this->name;
  }
  public function getEmail(){
    return $this->email;
  }
  public function setName($n){
    $this->name = $n;
  }
  public function setEmail($e){
    $this->email = $e;
  }
  public function delete(){
    
  }
}

