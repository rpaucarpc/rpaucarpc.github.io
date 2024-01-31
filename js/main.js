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

function btnPrueba(){

    const iziConfig = {
        merchantCode: '5003158',
        codMoney: 'PEN',
        amount: '1.50',
        action: 'pay',
        render: { typeForm: 'redirect' container: '#iframe-payment' },
        urlRedirect: 'izipay.pe',
        urlIPN: '',
        billing: {
        firstName: 'usuario',
        lastName: 'usuario_apellido_paterno',
        motherLastName: 'usuario_apellido_materno',
        address: 'dirección',
        postalCode: '01',
        city: 'lima',
        country: 'peru',
        state: 'lima',
        phoneNumber: '987654321',
        email: 'usuario@email.com',
        },
        numberReferenceTrade: '1234567',
        orderNumber: '123456',
        publicKey: 'string_encriptado',
        mode: 'prod',
        tokenSession: TOKEN_GENERADO,
        userOrg: '1snn5n9w'
        userScoring: 'izipay_low'
        };
}
