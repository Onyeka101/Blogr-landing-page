const hamburger = document.querySelector(".hamburger-logo");
const mobileMenu = document.querySelector(".mobile-menu");
const closeIcon= document.querySelector(".close-icon");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    closeIcon.classList.toggle("active");
})
closeIcon.addEventListener("click", () =>{
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    closeIcon.classList.remove("active");
})