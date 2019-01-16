

let cart = document.getElementById("cart")

let showCart = false 


toggleCartDropDown = () => {

    console.log("cart icon clicked")

    if(showCart === false) {
        cart.style.display = "initial"
        cart.style.opacity = "1"
        // cart.style.display = "block"
        
        
    } else {
        cart.style.display = "none"
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

document.querySelectorAll(".fa-shopping-cart")[0].addEventListener("click", toggleCartDropDown);
document.querySelectorAll(".fa-shopping-cart")[1].addEventListener("click", toggleCartDropDown);

window.addEventListener("click", hideCart)

