let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-bars');
    navbar.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('fa-bar');
    navbar.classList.remove('active')
}




