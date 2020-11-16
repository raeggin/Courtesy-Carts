
function submitForm() {
  //Get User Input: First Name
  var accountFirstName = document.getElementById("fname");
  var userFirstName = accountFirstName.value;

//Get User Input: Last Name
  var accountLastName = document.getElementById("lname");
  var userLastName = accountLastName.value;

//Get User Input: Email
  var accountEmail = document.getElementById("email");
  var userEmail = accountEmail.value;
  var at = userEmail.indexOf("@");

//Get User Input: Password
  var accountPsw = document.getElementById("psw");
  var userPsw= accountPsw.value;

//Get User Input: Check Password
  var accountRepeatPsw = document.getElementById("psw-repeat");
  var userRepeatPsw= accountRepeatPsw.value;

//Check to see if the passwords match
  if(userPsw !== userRepeatPsw){
    alert("Passwords do not match. Submit Failed.");
    return false
  }
  else if (at == -1 ){
    alert("Not a valid e-mail!");
    return false
  }
  else{
    alert("Submitted");
  }
}
