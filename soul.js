let btn = document.getElementById("scrollTopBtn");
let nav = document.querySelector(".nav");

window.addEventListener("scroll", function(){

    let navBottom = nav.offsetTop + nav.offsetHeight;

    if(window.scrollY > navBottom){
        btn.classList.add("show");
    }else{
        btn.classList.remove("show");
    }

});

btn.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});