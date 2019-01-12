let mobileDropdown = document.getElementById("mobileLinksContainer")

toggleMobileNav = () => {
    console.log("mobile nav clicked")
    if(mobileDropdown.style.marginTop !== "0px"){
    mobileDropdown.style.marginTop = "0px";
    } else {
        mobileDropdown.style.marginTop = "-475px"; 
    }
}

document.querySelector(".fa-bars").addEventListener("click", toggleMobileNav);