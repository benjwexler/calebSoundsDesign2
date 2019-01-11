var section1 = document.getElementById('section1');
var section2 = document.getElementById('section2');
var section3 = document.getElementById('section3');

var bounding1 = section1.getBoundingClientRect();
var bounding2 = section2.getBoundingClientRect();
var bounding3 = section3.getBoundingClientRect();


// let totalHeight = bounding1.height - 75
let totalHeight = bounding1.height - 120

let firstTwoSections = bounding1.height + bounding2.height - 750; 



let navLinks = document.getElementsByClassName("navLink")

let shoppingCarts = document.getElementsByClassName("fa-shopping-cart")

let tracks = document.getElementsByClassName("track")

var changeNavonScroll = () => {

    let scrollFromTop = document.body.scrollTop

    
    

    if(scrollFromTop > totalHeight) {

        document.getElementById("nav").style.background =  "rgb(9, 10, 16)";

        document.getElementById("navTitle").style.color = "rgb(56, 63, 244) "
        document.querySelector(".logInorSignUp").style.color = "rgb(56, 63, 244)"
        document.querySelector(".fa-user-lock").style.color = "rgb(56, 63, 244)"
        document.querySelector(".fa-bars").style.color = "white"
        // document.querySelector(".fa-shopping-cart").style.color = "rgba(255, 255, 255, 0.865)"
        
        for(let i=0; i< navLinks.length; i++) {
            navLinks[i].style.color = "white"
        }

        for(let i=0; i< shoppingCarts.length; i++) {
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

        for(let i=0; i< shoppingCarts.length; i++) {
            shoppingCarts[i].style.color = "rgba(0, 0, 0, 0.322)"
        }

       
    }

    // if(scrollFromTop > firstTwoSections) {
    //     console.log("hhh")
    //     document.getElementById("tracksContainer").style.opacity = "1"

    //     for(let i=0; i<tracks.length; i++) {
    //         tracks[i].classList.add(`track${i+1}Animation`)
    //     }
    // } else {
    //     document.getElementById("tracksContainer").style.opacity = "0"
    //     for(let i=0; i<tracks.length; i++) {
    //         tracks[i].classList.remove(`track${i+1}Animation`)
    //     }
    // }

}

document.body.addEventListener("scroll", changeNavonScroll); 

let trackPics = document.getElementsByClassName("trackImageContainer")
let trackCircles = document.getElementsByClassName("trackCircle")
let trackPlayIcons = document.getElementsByClassName("trackPlayIcon")

var trackHover = (e) => {
    e.currentTarget.childNodes[3].style.opacity = "1"
    // e.currentTarget.childNodes[3].style.width = "1"
    e.currentTarget.childNodes[5].style.opacity = "1"
}



var trackUnHover = (e) => {
    e.currentTarget.childNodes[3].style.opacity = "0"
    e.currentTarget.childNodes[5].style.opacity = "0"
}

var circleHover = (e) => {
    console.log(e.currentTarget)
    e.currentTarget.style.width = "110px"
    e.currentTarget.style.height = "110px"
    e.currentTarget.nextSibling.nextElementSibling.style.fontSize = "36px"
} 

var playIconHover = (e) => {
    console.log(e.currentTarget.previousElementSibling)
    e.currentTarget.previousElementSibling.style.width = "110px"
    e.currentTarget.previousElementSibling.style.height = "110px"
    e.currentTarget.previousElementSibling.nextSibling.nextElementSibling.style.fontSize = "36px"
} 

var circleUnHover = (e) => {
    e.currentTarget.style.width = "100px"
    e.currentTarget.style.height = "100px"
    e.currentTarget.nextSibling.nextElementSibling.style.fontSize = "30px"
  }


for(let i=0; i< trackPics.length; i++){
    trackPics[i].addEventListener("mouseover", trackHover);
    trackCircles[i].addEventListener("mouseover", circleHover);
    trackPlayIcons[i].addEventListener("mouseover", playIconHover);
    trackPics[i].addEventListener("mouseout", trackUnHover);
    trackCircles[i].addEventListener("mouseout", circleUnHover);
    // trackPlayIcons[i].addEventListener("mouseout", playIconHover);
    }
