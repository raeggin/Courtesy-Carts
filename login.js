function submitForm() {
  //Get User Input: Email
  var accountEmail = document.getElementById("email");
  var userEmail = accountEmail.value;
  var at = userEmail.indexOf("@");

  //Get User Input: Password
  var accountPsw = document.getElementById("psw");
  var userPsw= accountPsw.value;

if (at == -1 ){
    alert("Not a valid e-mail!");
    return false
  }
  else{
    alert("Submitted");
  }
}