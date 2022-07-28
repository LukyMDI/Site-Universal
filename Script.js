var cbc = document.getElementById("inicio");

document.addEventListener("scroll", function(){
    var posicaoy = window.pageYOffset;
    console.log(posicaoy);
    cbc.style.display = posicaoy <= 90 ? "none" : "block";
});

var geral = document.getElementById("geral");

var menu = document.getElementById("menu_geral");

var botao = document.getElementById("menu01");

var botao2 = document.getElementById("menu02");

var cancel = document.getElementById("cancel");

botao.addEventListener("click", function(e){
    geral.style.right = "120px";
    menu.style.display = "block";
    geral.style.opacity = "0.3";
    geral.style.cursor = "default";
    botao.style.cursor = "default";
    menu.style.animation = "menu_geral 0.5s forwards"
    geral.style.animation = "geral 0.5s forwards"
});

botao2.addEventListener("click", function(e){
    geral.style.right = "120px";
    menu.style.display = "block";
    geral.style.opacity = "0.3";
    geral.style.cursor = "default";
    botao.style.cursor = "default";
    menu.style.animation = "menu_geral 0.5s forwards"
    geral.style.animation = "geral 0.5s forwards"
});

cancel.addEventListener("click", function(e){
    menu.style.display = "none";
    geral.style.right = "0px"; 
    geral.style.opacity = "1";
    geral.style.cursor = "";
    botao.style.cursor = "";
    geral.style.removeProperty("animation");
    menu.style.removeProperty("animation");
});

document.addEventListener("mouseup", function(e){

    if(!menu.contains(e.target)){
       menu.style.display = "none";
       geral.style.right = "0px"; 
       geral.style.opacity = "1";
       geral.style.cursor = "";
       botao.style.cursor = "";
       geral.style.removeProperty("animation");
       menu.style.removeProperty("animation");
    }
});