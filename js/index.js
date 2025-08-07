let guy = document.getElementById("guy");
let image = document.getElementById("image");
let lady = document.getElementById("lady");

lady.addEventListener("click", ()=>{
 image.src ="./images/man_pressing_system2-removebg-preview.png"; 
})

guy.addEventListener("click", ()=>{
 image.src ="./images/a_lady_holding_laptop-removebg-preview.png"; 
})

// Ads section
function showAndHide() {
    let div = document.getElementById("hide");

    setTimeout(() => {
        div.classList.remove("hide");


setTimeout(() => {
    div.classList.add("hide");  
   },  20000); 

}, 30000)
  

}
showAndHide("hide");

// time

let display = document.getElementById ("display");
let time = document.getElementById("time");

time.addEventListener("click", () => {
  display.innerHTML =  Date(); 
});

//mobile header section

const nav = document.getElementById("nav");
const menu = document.getElementById("menu");
let isShowing = false;

menu.addEventListener("click", () => {
  if(!isShowing){
    nav.classList.add("show");
    nav.classList.remove("hide");
    isShowing =true;
    return
  }
  
  if(isShowing) {
    nav.classList.add("hide");
    nav.classList.remove("show");
    isShowing =false;
    return
  }
})

//AOS
AOS.init();

//carousel libary section
let owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    slideBy:1,
    margin:30,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});