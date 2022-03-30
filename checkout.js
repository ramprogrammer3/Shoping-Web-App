

var CartItem = JSON.parse(localStorage.getItem("CartItem"));
var getOne = document.getElementById("one");
var cartSize = document.getElementById("cart-size");
var totolPrice = document.getElementById("total-amount");
var price = 0;
if (CartItem != null) {
    cartSize.innerText = CartItem.length;
    for (let i = 0; i < CartItem.length; i++) {
        price += parseInt(CartItem[i].Price);
        getOne.innerHTML += `
    
            <div class="checkout-left">
                <div class="cart-img">
                     <img src="${CartItem[i].Image}" alt="" class = 'cart-image'>
                </div>
                <div class="cart-name">
                     <h2>${CartItem[i].Name}</h2>
                     <p>Amount Rs:<span> ${CartItem[i].Price}</span> </p>
                     <button class = "remove-item" onclick = "removeFromCart(${i})">Remove Item </button>
                </div>
            </div>
    `;
    }
    totolPrice.innerText = price;  
}
else {
    cartSize.innerText = 0;
}



function removeFromCart(i) {
    console.log(i);
    CartItem.splice(i, 1);
    localStorage.setItem("CartItem", JSON.stringify(CartItem));
    location.reload();
}


var placeOrderBtn = document.getElementById("place-order-btn");
placeOrderBtn.addEventListener("click", function () {
    location.assign("./order-conform.html");
})