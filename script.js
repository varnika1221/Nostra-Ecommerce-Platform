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


var sliderLeft = document.querySelector(".slider-left-button")
var sliderRight =document.querySelector(".slider-right-button")

var slideImage = document.querySelector(".slider-image-container")

var slidemargin = 0

sliderRight.addEventListener("click",function(){
    slidemargin =slidemargin+100

    if(slidemargin>200){
        slidemargin = 0
        slideImage.style.marginLeft= 0
    }

    else{
        slideImage.style.marginLeft = "-"+slidemargin+"vw"

    }
})

sliderLeft.addEventListener("click",function(){
    if(slidemargin==0)
        {
           
            slidemargin=200
            slideImage.style.marginLeft="-"+slidemargin+"vw";
        }
        else{
    
            slidemargin=slidemargin-100
        slideImage.style.marginLeft="-"+slidemargin+"vw";
        }
        
        
    }
    )

// var  likeButtons = document.querySelectorAll(".like-button")
// likeButtons.forEach(function(likeButton){
// likeButton.addEventListener("click",function(){
//     likeButton.style.color = "red"
// })
// })

var likebuttons = document.querySelectorAll(".like-button");

likebuttons.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        // Toggle the image between favorite and heart
        if (e.target.src.indexOf("favorite") > 0) {
            console.log("jkjk");
            e.target.src = "./images/brands/heart.png"; // Set to heart image
        } else {
            e.target.src = "./images/brands/favorite.png"; // Set to favorite image
        }
    });
});
