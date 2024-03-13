"use strict"
window.onscroll = function(){
    var scrooll = document.documentElement.scrollTop || this.document.body.scrollTop;
    var header = this.document.getElementById("header");
    var mouseTop = this.document.getElementById("mouseTop");

    if( scrooll > 60 ){
        header.classList.add("fondo-azul");
        mouseTop.classList.add("mostrar");
    }
    else{
        header.classList.remove("fondo-azul");
        mouseTop.classList.remove("mostrar");
    }
}

var mostrarMenu = function(){
    var menu = document.getElementById("menu");

    if(menu.style.display ==="none")
    {
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
}

window.onblur = function(){
    var menu = document.getElementById("menu");
    menu.style.display = 'none';
  }
