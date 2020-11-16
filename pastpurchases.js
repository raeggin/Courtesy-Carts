if (localStorage.getItem("selectedStore")){document.getElementById("storeLabel").innerHTML = "Grocery List for " + localStorage.getItem("selectedStore");
}
if (localStorage.getItem("userTime")){
  document.getElementById("deliveryLabel").innerHTML = "Deliverd by " + localStorage.getItem("userCourrier") + " between " + localStorage.getItem("userTime");
}

document.getElementById("labelOneItem").innerHTML = localStorage.getItem("firstItem");
document.getElementById("labelOneQty").innerHTML = (localStorage.getItem("firstItemQty"));

document.getElementById("labelTwoItem").innerHTML = localStorage.getItem("secondItemName");
document.getElementById("labelTwoQty").innerHTML = localStorage.getItem("secondItemQty");

document.getElementById("labelThreeItem").innerHTML = localStorage.getItem("thirdItemName");
document.getElementById("labelThreeQty").innerHTML = localStorage.getItem("thirdItemQty");

document.getElementById("labelFourItem").innerHTML = localStorage.getItem("fourthItemName");
document.getElementById("labelFourQty").innerHTML = localStorage.getItem("fourthItemQty");

document.getElementById("labelFiveItem").innerHTML = localStorage.getItem("fifthItemName");
document.getElementById("labelFiveQty").innerHTML = localStorage.getItem("fifthItemQty");