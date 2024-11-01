import { products } from "./product.js"; 

var offerBar = document.querySelector(".offer-bar");

var closeIcon = document.getElementById("offer-close").addEventListener("click", function() {
    offerBar.style.display = "none";
});

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

var container = document.querySelector(".products");
products.forEach((product) => {
    var createItem = document.createElement("div");
    createItem.classList.add("product");
    createItem.innerHTML = `
        <img style="width: 20vw;" src="${product.src}">
        <h1>${product.name}</h1>
        <p>₹${product.price}</p>
        <tags style="visibility:hidden;">${product.tags}</tags>
    `;

    container.append(createItem);
});
