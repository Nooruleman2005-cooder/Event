var email = "abc@gmail.com";
var pswd = "1234";
function getEmail(e){
   e.preventDefault();
   var userEmail = document.getElementById("email").value
   var userPassword = document.getElementById("password").value
   if(userEmail===email && userPassword===pswd){
    alert("You are Logged In Successfully!");
   }
   else{
    alert("Invalid Email Or Password!");
   }
}