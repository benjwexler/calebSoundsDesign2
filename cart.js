

let cart = document.getElementById("cart")

let showCart = false 


toggleCartDropDown = () => {

    console.log("cart icon clicked")

    if(showCart === false) {
        // cart.style.z_index = "99999999999999"
        cart.style.height = "auto";
        cart.style.opacity = "1"
        
        // cart.style.display = "block"
        
        
    } else {
        // cart.style.z_index = "-99999999999999"
        // cart.style.height = "0px";
        cart.style.opacity = "0"
        
        // cart.style.display = "none"
        
    }

    showCart = !showCart
   
}

hideCart = (e) => {
    if(e.target.classList[1] !== "fa-shopping-cart") {
        showCart = false
        // cart.style.display = "none"
        cart.style.opacity = "0"
    }
}

hi = () => {
    if(showCart === false) {
        cart.style.height = "0px";
    } else {
        // cart.style.height = "auto";
    }
}

document.querySelectorAll(".fa-shopping-cart")[0].addEventListener("click", toggleCartDropDown);
document.querySelectorAll(".fa-shopping-cart")[1].addEventListener("click", toggleCartDropDown);



cart.addEventListener("transitionend", hi);

window.addEventListener("click", hideCart)

