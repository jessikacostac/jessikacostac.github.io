$(document).ready(function () {
    $("#slider").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true
    });

    const exibirCarreira = function () {
        const addStyle = document.querySelector("#exibir-carreira")
        addStyle.style.display = "block"
    }

    const front = document.querySelector(".front")
    front.addEventListener("click", function () {
        window.location="front.html"
    })

    const back = document.querySelector(".back")
    back.addEventListener("click", function () {
        exibirCarreira()
    })

    const mobile = document.querySelector(".mobile")
    mobile.addEventListener("click", function () {
        exibirCarreira()
    })


    const menu = document.querySelector(".menu-hamburguer")
    menu.addEventListener("click", function(){
        console.log("ok")
        const acessoLista = document.querySelector(".dropdown")
        const acessoimgMenu = document.querySelector(".menu-hamburguer")
        const acessoImgLogo = document.querySelector(".logo")
        acessoLista.style.display="block"
        acessoImgLogo.style.display="none"
        acessoimgMenu.style.display="none"
    })



    // $(".menu-hamburguer").click(function(){
    //     $(".dropdown").slideToggle();
    // });

    // $("a.dropdown-link").click(function(){
    //     $(".dropdown").hide();
    // });


})