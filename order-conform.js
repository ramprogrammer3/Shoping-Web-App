




var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4);
        // var result = JSON.parse(this.responseText);
        // console.log(result);
        // console.log(JSON.parse(this.responseText))
    }
    xhttp.open("GET"," https://5d76bf96515d1a0014085cf9.mockapi.io/order/1",true);
    xhttp.send();