var items;
var itemImg;
var itemContainer;

var items2;
var itemImg2;
var itemContainer2;

var items3;
var itemImg3;
var itemContainer3;

var items4;
var itemImg4;
var itemContainer4;

var items5;
var itemImg5;
var itemContainer5;

var items6;
var itemImg6;
var itemContainer6;

var items7;
var itemImg7;
var itemContainer7;


var precios;
var total = 0;
function valor(event){
    precios = event.target;
    console.log(precios.getAttribute("value"));
    var precio = parseFloat(precios.getAttribute("value"));
    
    if(precio != 0){
        total += precio;
        document.getElementById("total").innerHTML = "Total: " + total;
    }
    else{
        document.getElementById("total").innerHTML = "Total: " + total;
    }
}

function checkTotal() {
    if (total > 0) {
      button.removeEventListener("click", checkTotal);
      button.addEventListener("click", buyFunction);
    }
}


function movingImg(event){
    itemImg = event.target;
    console.log(itemImg.src);
    valor(event);
}
function changeImg(event){
    itemContainer.src = itemImg.src;
}


function movingImg2(event){
    itemImg2 = event.target;
    console.log(itemImg2.src);
    valor(event);
}
function changeImg2(event){
    itemContainer2.src = itemImg2.src;
}    


function movingImg3(event){
    itemImg3 = event.target;
    console.log(itemImg3.src);
    valor(event);
}
function changeImg3(event){
    itemContainer3.src = itemImg3.src;
}


function movingImg4(event){
    itemImg4 = event.target;
    console.log(itemImg4.src);
    valor(event);
}
function changeImg4(event){
    itemContainer4.src = itemImg4.src;
}


function movingImg5(event){
    itemImg5 = event.target;
    console.log(itemImg5.src);
    valor(event);
}
function changeImg5(event){
    itemContainer5.src = itemImg5.src;
}


function movingImg6(event){
    itemImg6 = event.target;
    console.log(itemImg6.src);
    valor(event);
}
function changeImg6(event){
    itemContainer6.src = itemImg6.src;
}


function movingImg7(event){
    itemImg7 = event.target;
    console.log(itemImg7.src);
    valor(event);
}
function changeImg7(event){
    itemContainer7.src = itemImg7.src;
}

const button = document.getElementById("buy");
function buyFunction(){
    const buy = document.getElementById("completeBuy");
    buy.innerText = "Felicidades, has armado y comprado una PC completa";
    document.getElementById('congrats').href = './popUp.css';
}   

/**
 * desc
 * @date 2023-02-23
 * Load DOM objects, verifications and form events
 */
function loadedDom(){
    items = document.getElementsByClassName("boxes");
    for(let item of items){
        item.addEventListener("dragstart", movingImg);
        
    }
    itemContainer = document.getElementById("item");
    itemContainer.addEventListener("dragover", e => {
        e.preventDefault() 
    })
    itemContainer.addEventListener("drop", changeImg);
    /********************************************************/ 
    items2 = document.getElementsByClassName("mother");
    for(let item of items2){
        item.addEventListener("dragstart", movingImg2);
    }
    itemContainer2 = document.getElementById("item2");
    itemContainer2.addEventListener("dragover", e => {
        e.preventDefault()
        
    })
    itemContainer2.addEventListener("drop", changeImg2);
    /********************************************************/ 
    items3 = document.getElementsByClassName("proce");
    for(let item of items3){
        item.addEventListener("dragstart", movingImg3);
    }
    itemContainer3 = document.getElementById("item3");
    itemContainer3.addEventListener("dragover", e => {
        e.preventDefault()
    })
    itemContainer3.addEventListener("drop", changeImg3);
    /********************************************************/ 
    items4 = document.getElementsByClassName("ram");
    for(let item of items4){
        item.addEventListener("dragstart", movingImg4);
    }
    itemContainer4 = document.getElementById("item4");
    itemContainer4.addEventListener("dragover", e => {
        e.preventDefault()
    })
    itemContainer4.addEventListener("drop", changeImg4);
    /********************************************************/ 
    items5 = document.getElementsByClassName("storage");
    for(let item of items5){
        item.addEventListener("dragstart", movingImg5);
    }
    itemContainer5 = document.getElementById("item5");
    itemContainer5.addEventListener("dragover", e => {
        e.preventDefault()
    })
    itemContainer5.addEventListener("drop", changeImg5);
    /********************************************************/ 
    items6 = document.getElementsByClassName("graphic");
    for(let item of items6){
        item.addEventListener("dragstart", movingImg6);
    }
    itemContainer6 = document.getElementById("item6");
    itemContainer6.addEventListener("dragover", e => {
        e.preventDefault()
    })
    itemContainer6.addEventListener("drop", changeImg6);
    /********************************************************/ 
    items7 = document.getElementsByClassName("power");
    for(let item of items7){
        item.addEventListener("dragstart", movingImg7);
    }
    itemContainer7 = document.getElementById("item7");
    itemContainer7.addEventListener("dragover", e => {
        e.preventDefault()
    })
    itemContainer7.addEventListener("drop", changeImg7);
    
}
  
button.addEventListener("click", checkTotal);

document.addEventListener("DOMContentLoaded", loadedDom);