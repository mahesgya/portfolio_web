

window.onscroll = function() {
    let navbar = document.getElementById(Header);
    if(window.pageYOffset > 0){
        navbar.classList.add("scrolled")
    }else{
        navbar.classList.remove("scrolled")
    }
};