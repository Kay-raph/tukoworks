//Email validation
var emailField = document.getElementById("email");
var button = document.getElementById("submit");
var response = document.getElementById("response");

button.addEventListener("click", function () {
  var email = emailField.value;
  if (validateEmail(email)) {
    response.innerHTML = ""
  } else {
    response.innerHTML = "Sorry, Enter valid Email!! 😩";
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
//End of email validation
//Password Validation
$(document).ready(function(){
    var $submitBtn = $("#form input[type='submit']");
    var $passwordBox = $("#pass");
    var $confirmBox = $("#re_pass");
    var $errorMsg =  $('<span id="error_msg">Password mismatch!!</span>');

    // This is incase the user hits refresh - some browsers will maintain the disabled state of the button.
    $submitBtn.removeAttr("disabled");

    function checkMatchingPasswords(){
        if($confirmBox.val() != "" && $passwordBox.val != ""){
            if( $confirmBox.val() != $passwordBox.val() ){
                $submitBtn.attr("disabled", "disabled");
                $errorMsg.insertAfter($confirmBox);
            }
        }
    }

    function resetPasswordError(){
        $submitBtn.removeAttr("disabled");
        var $errorCont = $("#error_msg");
        if($errorCont.length > 0){
            $errorCont.remove();
        }  
    }
            $("#re_pass, #pass")
             .on("keydown", function(e){
                /* only check when the tab or enter keys are pressed
                 * to prevent the method from being called needlessly  */
                if(e.keyCode == 13 || e.keyCode == 9) {
                    checkMatchingPasswords();
                }
             })
             .on("blur", function(){                    
                // also check when the element looses focus (clicks somewhere else)
                checkMatchingPasswords();
            })
            .on("focus", function(){
                // reset the error message when they go to make a change
                resetPasswordError();
            })

    });
    