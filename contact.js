var offerBar = document.querySelector(".offer-bar")

var closeIcon = document.getElementById("offer-close").addEventListener("click",function(){
    offerBar.style.display="none"
})

var sidenavButton = document.getElementById("side-navbar-activate");
var sidenavMenu = document.querySelector(".side-navbar");
var sidenavClose = document.getElementById("side-navbar-close");

sidenavButton.addEventListener("click", () => {
    sidenavMenu.style.marginLeft = "0px"; // Corrected marginLeft property
});

// Optional: You can add an event listener to close the side navbar
sidenavClose.addEventListener("click", () => {
    sidenavMenu.style.marginLeft = "-60%"; // Reset to original position to hide the navbar
});