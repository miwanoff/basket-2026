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

//   console.log(cartData);
  setCartData(cartData);
}

function removeItem(el) {
    
}

function openCart(event) {
  const cartData = getCartData();
  console.log(cartData)
   if (cartData !== null) {
    let cardTable = "";
    cardTable =
      '<table class="shopping_list"><tr><th>Назва</th><th>Ціна</th><th>Кількість</th><th>Додати</th><th>Видалити</th></tr>';
    for (let item in cartData) {
      cardTable += "<tr>";
      for (let i = 0; i < cartData[item].length; i++) {
        cardTable += "<td>" + cartData[item][i] + "</td>";
      }
      cardTable += "<td> + </td>";
      cardTable += `<td><span class="minus" onclick="removeItem(this)" data-id="${item}">-</span></td>`;
      cardTable += "</tr>";
    }
    cardTable += "<table>";
    cartCont.innerHTML = cardTable;
  } else {
    // если в корзине пусто, то сигнализируем об этом
    cartCont.innerHTML = "У кошику пусто!";
  }
}

function clearCart() {
  localStorage.removeItem("cart");
  cartCont.innerHTML = "Кошик очишено.";
}

for (let i = 0; i < itemBoxes.length; i++) {
  itemBoxes[i].querySelector(".add_item").addEventListener("click", addToCart);
}

document.getElementById("checkout").addEventListener("click", openCart);
document.getElementById("clear_cart").addEventListener("click", clearCart);