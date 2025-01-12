const navbarNav = document.querySelector(".navbar-nav");

// saat menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};


// click di luar side bar untuk menutup
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
})


