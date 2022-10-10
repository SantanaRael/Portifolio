let tecFront = document.querySelector(".front");
    let tecsFront = document.querySelector(".tecFront");
    let iconFront = document.querySelector(".front i");
    
    tecFront.addEventListener("click", function () {
        iconFront.classList.toggle("iconOpen");
        tecsFront.classList.toggle("open");
    });


    let tecBack = document.querySelector(".back");
    let tecsBack = document.querySelector(".tecBack");
    let iconBack = document.querySelector(".back i");
    
    tecBack.addEventListener("click", function () {
        iconBack.classList.toggle("iconOpen");
        tecsBack.classList.toggle("open");
    });
     


    window.sr = ScrollReveal({reset: true});

    sr.reveal('.inicio', {duration:1000});
    sr.reveal('.sobre', {duration:1000});
    sr.reveal('.front', {duration:1000});
    sr.reveal('.back', {duration:1000});
    sr.reveal('.projetos', {duration:1000});
    sr.reveal('.projeto', {duration:1000});
    sr.reveal('.footer', {duration:1000});

    sr.reveal('.textcenter', {duration:1000});



function myFunction() {
    var menu = document.querySelector(".topnav");
    if (menu.style.height === "60px") {
        menu.style.height = "auto";
    } else {
        menu.style.height = "60px";
    }
}








    