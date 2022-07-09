window.sr = ScrollReveal({reset: true});

    sr.reveal('.tecnologias', {duration:3000});

    sr.reveal('.inicio', {duration:1000});

    sr.reveal('.textcenter', {duration:1000});
    sr.reveal('.descricao', {duration:1000});

    sr.reveal('.swiffy-slider', {duration:2000});




function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

$(document).ready(function () {
    $('.carousel').carousel({
        pause: "false"
    });
    $('.carousel').css({ 'margin': 0, 'width': $(window).outerWidth(), 'height': $(window).outerHeight() });
    $('.carousel .item').css({ 'position': 'fixed', 'width': '100%', 'height': '100%' });
    $('.carousel-inner div.itemimg').each(function () {
        varimgSrc = $(this).attr('src');
        $(this).parent().css({ 'background': 'url(' + imgSrc + ') center center no-repeat', '-webkit-background-size': '100% ', '-moz-background-size': '100%', '-o-background-size': '100%', 'background-size': '100%', '-webkit-background-size': 'cover', '-moz-background-size': 'cover', '-o-background-size': 'cover', 'background-size': 'cover' });
        $(this).remove();
    });
    $(window).on('resize', function () {
        $('.carousel').css({ 'width': $(window).outerWidth(), 'height': $(window).outerHeight() });
    });
    });

    