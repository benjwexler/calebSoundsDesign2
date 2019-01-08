var section1 = document.getElementById('section1');
var section2 = document.getElementById('section2');
var section3 = document.getElementById('section3');

var bounding1 = section1.getBoundingClientRect();
var bounding2 = section2.getBoundingClientRect();
var bounding3 = section3.getBoundingClientRect();


// let totalHeight = bounding1.height - 75
let totalHeight = bounding1.height - 120



let navLinks = document.getElementsByClassName("navLink")

let shoppingCarts = document.getElementsByClassName("fa-shopping-cart")

var changeNavonScroll = () => {

    let scrollFromTop = document.body.scrollTop

    
    

    if(scrollFromTop > totalHeight) {
        console.log("Boom, Boom")

        document.getElementById("nav").style.background =  "rgb(9, 10, 16)";

        document.getElementById("navTitle").style.color = "rgb(56, 63, 244) "
        document.querySelector(".logInorSignUp").style.color = "rgb(56, 63, 244)"
        document.querySelector(".fa-user-lock").style.color = "rgb(56, 63, 244)"
        document.querySelector(".fa-bars").style.color = "white"
        // document.querySelector(".fa-shopping-cart").style.color = "rgba(255, 255, 255, 0.865)"
        
        for(let i=0; i< navLinks.length; i++) {
            navLinks[i].style.color = "white"
        }

        for(let i=0; i< navLinks.length; i++) {
            shoppingCarts[i].style.color = "rgba(255, 255, 255, 0.865)"
        }





    } else {
        document.getElementById("nav").style.background =  "#f2f2f2";
        document.getElementById("navTitle").style.color = "rgba(45, 51, 221, 0.747)"
        document.querySelector(".logInorSignUp").style.color = "rgba(45, 51, 221, 0.747)"
        document.querySelector(".fa-user-lock").style.color = "rgba(45, 51, 221, 0.747)"
        
        document.querySelector(".fa-bars").style.color = "black"
        // document.querySelector(".fa-shopping-cart").style.color = "rgba(0, 0, 0, 0.322)"
        
        for(let i=0; i< navLinks.length; i++) {
            navLinks[i].style.color = "black"
        }

        for(let i=0; i< navLinks.length; i++) {
            shoppingCarts[i].style.color = "rgba(0, 0, 0, 0.322)"
        }

       
    }
}

document.body.addEventListener("scroll", changeNavonScroll); 