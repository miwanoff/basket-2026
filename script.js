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
  const button = event.target;
  let cartData = getCartData() || {};
  let itemID = button.getAttribute("data-id");
  const parentBox = button.parentNode;
  const itemTitle = parentBox.querySelector(".item_title").innerHTML;
  const itemPrice = parentBox.querySelector(".item_price").innerHTML;
  //   console.log("click " + itemID + " " + itemTitle + " " + itemPrice);
  if (cartData.hasOwnProperty(itemID)) {
    cartData[itemID][2] += 1;
  } else {
    cartData[itemID] = [itemTitle, itemPrice, 1];
  }

  console.log(cartData);
  setCartData(cartData)
}

for (let i = 0; i < itemBoxes.length; i++) {
  itemBoxes[i].querySelector(".add_item").addEventListener("click", addToCart);
}
