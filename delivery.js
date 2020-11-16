function submitForm(){
  var courrier = document.getElementById("courriers");
  var selectedCourrier = courrier.value;

  var time = document.getElementById("times");
  var selectedTime = time.value;

  if (typeof(Storage) !== "undefined") {
  localStorage.setItem("userCourrier",selectedCourrier);
  localStorage.setItem("userTime",selectedTime);
} else {
  alert("Local Storage not supported on current browser.")
}
alert("Your delivery is scheduled for: " + localStorage.getItem("userTime")+" by "+ localStorage.getItem("userCourrier"));
}