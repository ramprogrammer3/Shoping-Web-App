

function one() {
    document.getElementById('slideImg').src = "./slideImage/2.png"
    document.getElementById('btn1').classList.remove('active-indicator');
    document.getElementById('btn2').classList.add('active-indicator');
    document.getElementById('btn3').classList.remove('active-indicator');
    document.getElementById('btn4').classList.remove('active-indicator');
}
function two() {
    document.getElementById('slideImg').src = "./slideImage/3.png"
    document.getElementById('btn1').classList.remove('active-indicator');
    document.getElementById('btn2').classList.remove('active-indicator');
    document.getElementById('btn3').classList.add('active-indicator');
    document.getElementById('btn4').classList.remove('active-indicator');
}
function three() {
    document.getElementById('slideImg').src = "./slideImage/4.png"
    document.getElementById('btn1').classList.remove('active-indicator');
    document.getElementById('btn2').classList.remove('active-indicator');
    document.getElementById('btn3').classList.remove('active-indicator');
    document.getElementById('btn4').classList.add('active-indicator');
}
function four() {
    document.getElementById('slideImg').src = "./slideImage/1.png"
    document.getElementById('btn1').classList.add('active-indicator');
    document.getElementById('btn2').classList.remove('active-indicator');
    document.getElementById('btn3').classList.remove('active-indicator');
    document.getElementById('btn4').classList.remove('active-indicator');
}


setInterval(one, 2000);
setInterval(two, 4000);
setInterval(three, 6000);
setInterval(four, 8000);


var getClothSection = document.getElementById('clothing-section');
var getAccessorySection = document.getElementById('accessory-section');
// var getContainer = document.getElementById('product-container');

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
        var result = JSON.parse(this.responseText);
        for (var i = 0; i < result.length; i++){
            if (result[i].isAccessory === false) {
                
                var createElement = document.createElement('div');
                createElement.id = `card${result[i].id}`
                createElement.className = 'product-card';
                createElement.innerHTML = `
                <img class="productImage" onclick="openProduct(${result[i].id})" id=${result[i].id} src="${result[i].preview}" />
                `
                var createDiv = document.createElement('div');
                createDiv.className = "card-description";
                createDiv.innerHTML = `
                    <h1>${result[i].name}</h1>
                    <p>${result[i].brand}</p>
                    <h2>Rs ${result[i].price} </h2>
                `;
                
                createElement.appendChild(createDiv);
                getClothSection.appendChild(createElement);                
            } else { 
                var createElement = document.createElement('div');
                createElement.id = `card${result[i].id}`
                createElement.className = 'product-card';
                createElement.innerHTML = `
                <img class="productImage" onclick="openProduct(${result[i].id})" id=${result[i].id} src="${result[i].preview}" />
                `
                
                var createDiv = document.createElement('div');
                createDiv.className = "card-description";
                createDiv.innerHTML = `
                    <h1>${result[i].name}</h1>
                    <p>${result[i].brand}</p>
                    <h2>Rs ${result[i].price} </h2>
                `;
                createElement.appendChild(createDiv);
                getAccessorySection.appendChild(createElement);
            }   
        }
    }
}
xhttp.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/product", true);
xhttp.send();

function openProduct(e) {
    location.assign("./product_detail.html");
    imageId = e;


    if (localStorage.getItem("Item Id") == null) {
        var itemId = "";
        itemId = imageId;
        localStorage.setItem("Item Id", JSON.stringify(itemId));
    }
    else {
        localStorage.getItem("Item Id");
        itemId = "";
        itemId = imageId;
        localStorage.setItem("Item Id", JSON.parse(itemId));
    }
    
}


var goToCheckoutPage = document.getElementById("go-to-check-out-page");

goToCheckoutPage.addEventListener("click", function () {
    location.assign("./checkout.html")
})