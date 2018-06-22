$(document).ready(function () {

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