<?php 

include("vars.php") ;
// $name = $_POST["name"] ;
// $email = $_POST["email"] ;

// for safety
$name = filter_input(INPUT_POST ,"name" ) ;
$email = filter_input(INPUT_POST ,"email" ) ;
$message = filter_input(INPUT_POST ,"message" ) ;

if (empty($name) || empty($email) ) {
    $empty_error = "Please Enter Name and Email"    ;  
}

if (strlen($name) > $MAX_NAME_LENGTH) {
    $length_error = "Name must be Less than 100 characters" ;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($email) ) {
    $emailErr = "Invalid email format";
  }

if (strlen($message) > $MAX_Message_LENGTH) {
    $msg_error = "Message must be Less than 255 characters" ;
}



// email validation

// if login successfully
if (empty($empty_error) && empty($length_error) && empty($msg_error) &&  empty($emailErr)) {
    include("loginSuccess.php") ; 
} else {
    include("index.php") ;
}


?>

