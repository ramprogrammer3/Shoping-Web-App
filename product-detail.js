


var imageId = JSON.parse(localStorage.getItem("Item Id"));

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
        var result = JSON.parse(this.responseText);
        console.log(result)
        var photo = result.photos;
        document.getElementById("big-image").src = result.preview;
        document.getElementById("name").innerText = result.name;
        document.getElementById("brand").innerText = result.brand;
        document.getElementById("price").innerText = result.price;
        document.getElementById("description-text").innerText = result.description;

        var getViewImg = document.getElementById('view');
            for(let i = 0; i<photo.length; i++){
                getViewImg.innerHTML += `
                <img class = "smallImg border" src = "${photo[i]}"  id = "img${i}" onclick ="imageClicked('img${i}')" >
                `; 
        }
        
        var addBtn = document.getElementById("addBtn");
                addBtn.innerHTML += `
                <button type="button" id="cart-btn1" class = "cart-btn" onclick = "cart('${result.preview}','${result.name}','${result.price}')">Add to Cart</button>
                `;

    }
}
xhttp.open("GET", `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${imageId}`, true);
xhttp.send();


function imageClicked(activeImageID){

    var smallImg = document.getElementsByClassName("smallImg");
    for(var i = 0; i< smallImg.length; i++){
        smallImg[i].classList.remove("border");
        smallImg[i].classList.remove("active-view-img")
    }
    var smallActiveImg = document.getElementById(activeImageID);
    smallActiveImg.classList.add("active-view-img");   
    document.getElementById("big-image").src = document.getElementById(activeImageID).src; 
}
   
function cart(productPreview,productName,productPrice) {
    var productCart = {
        Image: productPreview,
        Name: productName,
        Price : productPrice
   }

    if (localStorage.getItem("CartItem") == null) {
        var CartItem = [];
        CartItem.push(productCart);
        localStorage.setItem("CartItem", JSON.stringify(CartItem));
    }
    else {
        var data = JSON.parse(localStorage.getItem("CartItem"));
        data.push(productCart);
        localStorage.setItem("CartItem", JSON.stringify(data));

    }
}


