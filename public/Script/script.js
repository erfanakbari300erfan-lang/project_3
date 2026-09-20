
let menuBtn = document.querySelector(".menu_icon");
let menuClose = document.querySelector(".close_icon");
let mobileMenu = document.querySelector("#menu-mobile");
let HeaderSection = document.querySelector("#header-section");

menuBtn.addEventListener("click", function () {

    // مخفی کردن آیکن منو
    menuBtn.style.display = "none";

    // نمایش آیکن بستن
    menuClose.style.display = "block";

    // باز کردن منو
    mobileMenu.classList.remove("max-h-0", "opacity-0");
    mobileMenu.classList.add("max-h-120", "opacity-100");

    //اضافه شدن ارتفاع 
    HeaderSection.style.height = "520px";

    //
    mobileMenu.classList.remove("pointer-events-none");
    mobileMenu.classList.add("pointer-events-auto");
    
});


menuClose.addEventListener("click", function () {

    // نمایش آیکن منو
    menuBtn.style.display = "block";

    // مخفی کردن آیکن بستن
    menuClose.style.display = "none";

    // بستن منو
    mobileMenu.classList.remove("max-h-120", "opacity-100");
    mobileMenu.classList.add("max-h-0", "opacity-0");

    //کم شدن ارتفاع 
    HeaderSection.style.height = "78px"

    // 
    mobileMenu.classList.remove("pointer-events-auto");
    mobileMenu.classList.add("pointer-events-none");
});


