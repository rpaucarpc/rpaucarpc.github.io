
const btnEnviar = document.querySelector('#btnEnviar');
btnEnviar.addEventListener('click', iniciar);

function iniciar(e){
    e.preventDefault();
    getToken();

};

function getToken(){
    let transactionId = Date.now();
    const url = 'https://testcheckout.izipay.pe/apidemo/v1/Token/Generate';
    //const url = 'https://testapi-pw.izipay.pe/security/v1/Token/Generate';
    //const url = 'https://api-pw.izipay.pe/security/v1/Token/Generate ';
    const datos = {
        requestSource: "RECURRENCE",
        merchantCode: "5001358",
        publicKey: "++--(ABC)++A12345%",
        amount: "4.00",
        orderNumber: '3456789'
    }

    const conf = {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'transactionId': transactionId
        },
        body: JSON.stringify(datos)
    }
    
    fetch(url, conf)
        .then(respuesta => {
            if(!respuesta.ok){
                throw new Error(`Error de red - Código de estado: ${respuesta.status}`);
            }
            return respuesta.json();
        })
        .then( data => {
            //console.log(data);
            cargarFormulario(data.response.token);
        })
        .catch(error => {
            console.error('Error al invocar la URL:', error);
        })

};

function cargarFormulario(token){
    
    console.log(token);

    const iziConfig = {
        merchantCode: '5001358',
        codMoney: 'PEN',
        amount: '1.50',
        action: 'pay',
        render: { typeForm: 'redirect', container: '#iframe-payment' },
        urlRedirect: 'https://testrecurrentes.izipay.pe/pasarela/',
        urlIPN: '',
        billing: {
            firstName: 'Rolando',
            lastName: 'Paucar',
            motherLastName: 'Camargo',
            address: 'Jr. Las Flores 383',
            postalCode: '12000',
            city: 'Huancayo',
            country: 'peru',
            state: 'El TAmbo',
            phoneNumber: '959706884',
            email: 'rpaucarpc@gmail.com',
        },
        numberReferenceTrade: '1234567',
        orderNumber: '123456',
        publicKey: '++--(ABC)++A12345%',
        mode: 'test',
        tokenSession: token,
        userOrg: "1snn5n9w",
        userScoring: "izipay_low"
    };

    const iziObj = new IzipayCommerce(iziConfig);
    
    if (iziObj) iziObj.LoadForm('RSA');

};
