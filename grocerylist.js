document.getElementById("storeLabel").innerHTML = "Grocery List for " + localStorage.getItem("selectedStore");
function submitForm() {
  //Get User Input: Item 1
  var itemOne = document.getElementById("itemOneName");
  var itemOneNm = itemOne.value; 

  var itemOneQ = document.getElementById("itemOneQuantity");
  var itemOneQty = itemOneQ.value;

//Get User Input: Item 2
  var itemTwo = document.getElementById("itemTwoName");
  var itemTwoNm = itemTwo.value;

  var itemTwoQ = document.getElementById("itemTwoQuantity");
  var itemTwoQty = itemTwoQ.value;

//Get User Input: Item 3
  var itemThree = document.getElementById("itemThreeName");
  var itemThreeNm = itemThree.value;

  var itemThreeQ = document.getElementById("itemThreeQuantity");
  var itemThreeQty = itemThreeQ.value;

//Get User Input: Item 4
  var itemFour = document.getElementById("itemFourName");
  var itemFourNm = itemFour.value;

  var itemFourQ = document.getElementById("itemFourQuantity");
  var itemFourQty = itemFourQ.value;

//Get User Input: Item 5
  var itemFive = document.getElementById("itemFiveName");
  var itemFiveNm = itemFive.value;

  var itemFiveQ = document.getElementById("itemFiveQuantity");
  var itemFiveQty = itemFiveQ.value;

  alert("Submitted");

if (typeof(Storage) !== "undefined") {
  localStorage.setItem("firstItem",itemOneNm);
  localStorage.setItem("firstItemQty",itemOneQty);

  localStorage.setItem("secondItemName",itemTwoNm);
  localStorage.setItem("secondItemQty",itemTwoQty);

  localStorage.setItem("thirdItemName",itemThreeNm);
  localStorage.setItem("thirdItemQty",itemThreeQty);

  localStorage.setItem("fourthItemName", itemFourNm);
  localStorage.setItem("fourthItemQty",itemFourQty);

  localStorage.setItem("fifthItemName",itemFiveNm);
  localStorage.setItem("fifthItemQty",itemFiveQty);

} else {
  alert("Local Storage not supported on current browser.")
}
}
