//#region Esconder Header
let ultimoScroll = 0;

const cabecalho = document.querySelector('header');

window.addEventListener('scroll', function () {

    let scrollAtual = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollAtual > ultimoScroll) {
        cabecalho.classList.add('header-escondido');
    }
    else {
        cabecalho.classList.remove('header-escondido');
    }

    ultimoScroll = scrollAtual <= 0 ? 0 : scrollAtual;
});
//#endregion

//#region Esconder WhatsApp

const botaoWhatsapp = document.querySelector('#WhatsAppButton');
const rodape = document.querySelector('footer');

const observadorRodape = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {
            botaoWhatsapp.classList.add('whatsapp-escondido');
        }
        else {
            botaoWhatsapp.classList.remove('whatsapp-escondido');
        }
    });
},
    {
        threshold: 0.3
    });

observadorRodape.observe(rodape);

//#endregion