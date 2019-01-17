let mobileDropdown = document.getElementById("mobileLinksContainer")
let navDropdownOuterContainer = document.getElementById("navDropdownOuterContainer")

toggleMobileNav = () => {
    console.log("mobile nav clicked")
    if(mobileDropdown.style.marginTop !== "0px"){
        
        // navDropdownOuterContainer.style.display = "block"
        navDropdownOuterContainer.style.zIndex = "9999999";

    mobileDropdown.style.marginTop = "0px";
    } else {
        // navDropdownOuterContainer.style.display = "none"
        // navDropdownOuterContainer.style.zIndex = "-9999999";
        mobileDropdown.style.marginTop = "-475px"; 
    }
}

navDropDownTransitionEnd = () => {
    console.log("whoo ha")
}
mobileDropdown.addEventListener("transitionend", navDropDownTransitionEnd);
document.querySelector(".fa-bars").addEventListener("click", toggleMobileNav);