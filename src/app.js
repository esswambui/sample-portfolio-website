const hamburgerButton = document.getElementById("hamburger")
const navList = document.getElementById("navlist")
const hideLogo = document.getElementById("logo")

function toggleButton () {
    navList.classList.toggle("show");
    hideLogo.classList.toggle("show");
}

hamburgerButton.addEventListener("click", toggleButton)