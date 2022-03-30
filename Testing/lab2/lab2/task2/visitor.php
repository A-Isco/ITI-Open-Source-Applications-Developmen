<?php
class visitor{
    
    private $username;
   private $password;
  
      function __construct($username,$password) {
       
        $this->username=$username;
        $this->password=$password;
   }

   static function validate($username,$pass){
        
       if ($username == "abdelrahman" && $pass=="7777" ) {
            return true ;
            
        } else return false;
        
    }
    function logout(){
        
    }
}

?>
