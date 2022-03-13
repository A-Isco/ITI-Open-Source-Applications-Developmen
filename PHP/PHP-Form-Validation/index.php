<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h3> Contact Form   </h3>
        <div id="after_submit">
            <?php  
                if (isset( $empty_error)) {echo " ***   $empty_error  " ;} ;
                if (isset( $length_error )) {echo " ***   $length_error   " ;} ;
                if (isset( $msg_error )) {echo " ***   $length_error   " ;} ;
                if (isset( $emailErr )) {echo " ***   $emailErr   " ;} ;

            ?>
        </div>
        <form id="contact_form" action="controller.php" method="POST" enctype="multipart/form-data">

            <div class="row">
                <label class="required" for="name">Your name:</label><br />
                <input id="name" class="input" name="name" type="text" value="<?php echo htmlspecialchars($name) ?>" 
                size="30" /><br />

            </div>
            <div class="row">
                <label class="required" for="email">Your email:</label><br />
                <input id="email" class="input" name="email" type="text" value="<?php echo htmlspecialchars($email) ?>"
                 size="30" /><br />

            </div>
            <div class="row">
                <label class="required" for="message">Your message:</label><br />
                <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />

            </div>

            <input id="submit" name="submit" type="submit" value="Send email" />
            <input id="clear" name="clear" type="reset" value="clear form" />

        </form>


</body>
</html>