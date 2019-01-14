let exitModal = document.getElementById("exitModal")
let modal = document.getElementById("modalContainer")
let loginSignupIcon = document.getElementById("logInSignUpContainer")
console.log(exitModal)

hideModal = () => {
    modal.style.display = "none";
    console.log("dbnu dk")
}

showModal = () => {
    modal.style.display = "initial";
    console.log("dbnu dk")
}



exitModal.addEventListener("click", hideModal);
loginSignupIcon.addEventListener("click", showModal);