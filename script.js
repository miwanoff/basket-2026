// const itemBox = document.getElementsByClassName("item_box")
const itemBoxes = document.querySelectorAll(".item_box");
const cartCont = document.getElementById("cart_content");

// const itemButtons = document.querySelectorAll(".add_item");

function setCartData(cartObject) {
  localStorage.setItem("cart", JSON.stringify(cartObject));
}

function getCartData() {
  return JSON.parse(localStorage.getItem("cart"));
}

function addToCart(event) {
  let button = event.target;
  let cartData = getCartData() || {};
  let itemID = button.getAttribute("data-id");
  const parentBox = button.parentNode;
  const itemTitle = parentBox.querySelector(".item_title").innerHTML;
  console.log("click " + itemID + itemTitle);
}

for (let i = 0; i < itemBoxes.length; i++) {
  itemBoxes[i].querySelector(".add_item").addEventListener("click", addToCart);
}
