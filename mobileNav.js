let mobileDropdown = document.getElementById("mobileLinksContainer")
let mobileLinksOuterContainer = document.getElementById("mobileLinksOuterContainer")

toggleMobileNav = () => {
    console.log("mobile nav clicked")
    if(mobileDropdown.style.marginTop !== "0px"){
        // mobileLinksOuterContainer.style.display = "flex"
    mobileDropdown.style.marginTop = "0px";
    } else {
        // mobileLinksOuterContainer.style.display = "none"
        mobileDropdown.style.marginTop = "-475px"; 
    }
}

document.querySelector(".fa-bars").addEventListener("click", toggleMobileNav);