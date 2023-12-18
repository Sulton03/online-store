var products = {
    "1" : {
        "name" : "Парикмахерское кресло №1",
        "cost" : 6400,
        "img" : "images/minikreslo.png",
    },
    "2" : {
        "name" : "Парикмахерское кресло №2",
        "cost" : 7200,
        "img" : "images/minikreslo.png",
    },
    "3" : {
        "name" : "Парикмахерское кресло №3",
        "cost" : 8400,
        "img" : "images/minikreslo.png",
    },
    "4" : {
        "name" : "Парикмахерское кресло №4",
        "cost" : 5800,
        "img" : "images/minikreslo.png",
    },
    "5" : {
        "name" : "Парикмахерское кресло №5",
        "cost" : 9700,
        "img" : "images/minikreslo.png",
    },
    "6" : {
        "name" : "Парикмахерское кресло №6",
        "cost" : 8900,
        "img" : "images/minikreslo.png",
    },
    "7" : {
        "name" : "Парикмахерское кресло №7",
        "cost" : 9800,
        "img" : "images/minikreslo.png",
    },
    "8" : {
        "name" : "Парикмахерское кресло №8",
        "cost" : 12000,
        "img" : "images/minikreslo.png",
    },
};

var product = '';
for (var key in products) {

    product+='<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">';
    product+='    <div class="row minikreslo">';
    product+='        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 minikreslo_div_col">';
    product+='            <img src="'+products[key].img+'" alt="">';
    product+='        </div>';
    product+='        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">';
    product+='            <p>'+products[key].name+'</p>';
    product+='            <h3 class="minikreslo_div_col">'+products[key].cost+'</h3>';
    product+='        </div>';
    product+='        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 minikreslo_div_col">';
    product+='            <button type="button" class="btn btn-light">Купить</button>';
    product+='        </div>';
    product+='    </div>';
    product+='</div>';
}

document.getElementById('product1').innerHTML = product;
document.getElementById('product2').innerHTML = product;

// ===========================================================================================

// var impulses = {
//     "1" : "img"
// }

// ============================================================================================

// const button = document.querySelector(".btn1");
// button.addEventListener("click", showText);

// function showText() {

//     const text = document.querySelector(".block-text");
//     text.hidden = false;


//     const button = document.querySelector(".btn1");
//     button.removeEventListener("click", showText);
//     button.addEventListener("click", hideText)

// }

// function hideText() {

// const text =document.querySelector(".block-text ");
// text.hidden = true;


// const button = document.querySelector(".btn1");
// button.removeEventListener("click", hideText);
// button.addEventListener("click", showText)

// }


// ==================================

const button = document.querySelector(".btn1");
button.addEventListener("click",showText);
function hideText()
{
  
const text =document.querySelector(".block-text");
text.hidden = true;

const button = document.querySelector(".btn1");
button.removeEventListener("click", hideText);
button.addEventListener("click", showText)

}

function showText() {
    document.querySelector(".block-text").innerHTML = text;
    const text = document.querySelector(".block-text");
    text.hidden = false;
    const button = document.querySelector(".btn1");
    button.removeEventListener("click", showText);
    button.addEventListener("click", hideText)

}