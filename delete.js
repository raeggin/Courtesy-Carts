document.getElementById("storeLabel").innerHTML = "Grocery List for " + localStorage.getItem("selectedStore");

document.getElementById("firstLabel").innerHTML = localStorage.getItem("firstItem");
document.getElementById("labelOneQty").innerHTML = (localStorage.getItem("firstItemQty"));

document.getElementById("secondLabel").innerHTML = localStorage.getItem("secondItemName");
document.getElementById("labelTwoQty").innerHTML = localStorage.getItem("secondItemQty");

document.getElementById("thirdLabel").innerHTML = localStorage.getItem("thirdItemName");
document.getElementById("labelThreeQty").innerHTML = localStorage.getItem("thirdItemQty");

document.getElementById("fourthLabel").innerHTML = localStorage.getItem("fourthItemName");
document.getElementById("labelFourQty").innerHTML = localStorage.getItem("fourthItemQty");

document.getElementById("fifthLabel").innerHTML = localStorage.getItem("fifthItemName");
document.getElementById("labelFiveQty").innerHTML = localStorage.getItem("fifthItemQty");

function deleteItem(stringName, stringQty, btn, checkbx,removeItem,removeQty){
 document.getElementById(stringName).style.visibility = "hidden";
 document.getElementById(stringQty).style.visibility = "hidden";
 document.getElementById(btn).style.visibility = "hidden";
document.getElementById(checkbx).style.visibility = "hidden";
localStorage.removeItem(removeItem);
localStorage.removeItem(removeQty);
}
function purchased(){
  alert("Purchased! It has checked on your list.");
}