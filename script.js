// /////////////////////////menu responsive/////////////////////////////////
let burgerMenu = document.getElementById("burger-menu");
let navLinks = document.querySelector(".nav-links");

burgerMenu.onclick=()=>{
    burgerMenu.classList.toggle("rotate")
    navLinks.classList.toggle("showMenu")
}
///////////////////////////////////////////////////////////////////

if(location.pathname==='/index.html'){
    let li = document.querySelectorAll(".links-list li a");
    li[0].classList.add("active")
}
else if(location.pathname==='/aboutUs.html'){
    let li = document.querySelectorAll(".links-list li a");
    li[1].classList.add("active")
}
else if(location.pathname==='/tours.html'){
    let li = document.querySelectorAll(".links-list li a");
    li[2].classList.add("active")
}

///////////////////////////////////////////////

//eye of password
let password = document.getElementById("pass");
let eye = document.querySelector(".passContainer .eye");
if(password){

    eye.addEventListener("click",()=>{
        eye.classList.toggle("ri-eye-off-line");
        if(password.type==='password')
            password.type='text';
        else
            password.type='password';
    })
}

let re_password = document.getElementById("pass2");
let eye2 = document.querySelector(".RepassContainer .eye");
if(re_password){
    eye2.addEventListener("click",()=>{
        eye2.classList.toggle("ri-eye-off-line");
        if(re_password.type==='password')
            re_password.type='text';
        else
            re_password.type='password';
    })
}






///////////////////////////////////////////////////////////////////
// home-arrow
let arr = document.querySelector(".up-home-arrow");
window.addEventListener("scroll", () => {
    if(scrollY >250){
        arr.style.display="block";
    }
    else{
        arr.style.display="none";
    }
})

function return_home(){
    window.scrollTo({
        top : 0,
        behavior : "smooth"}
    );
}
// end of home-arrow 




