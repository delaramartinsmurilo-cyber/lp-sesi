window.addEventListener('scroll', ()=> {
    const nav = document.querySelector('nav')
    const footer = document.querySelector('footer')

    if(window.scrollY > 0){
        nav.classList.add('sc')
        footer.classList.add('ft')
    }else{
        nav.classList.remove('sc')
        footer.classList.remove('ft')
    }
})


function navTo(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}


const cards = document.querySelectorAll('#s2, .card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 200);
            });
        }else{
             cards.forEach((card) => {
                    card.classList.remove('visible');
            });
        }
    })
}, {threshold: 0.2})

observer.observe(document.querySelector('#s2'))


function enviar(){
    const nome = document.getElementById('nome').value 
    const assunto = document.getElementById('assunto').value 
    //montar a string (mensagem)
    const mensagem = `Gostaria de entrar em contato\n\nNome: ${nome}\nAssunto: ${assunto}`
    //interpretar caracteres especiais e espaços entre palavras
    const msg = encodeURIComponent(mensagem)
    window.open(`https://wa.me/5541999999999?text=${msg}`)
}




const slides =
document.getElementById("slides");

const imagens =
document.querySelectorAll(".slides img");

let index = 0;

const largura = 900;

function passarSlide(){

    index++;

    slides.style.transition = "1s";

    slides.style.transform =
    `translateX(-${index * largura}px)`;



    if(index === imagens.length - 1){

        setTimeout(() => {

            slides.style.transition = "none";

            slides.style.transform =
            "translateX(0px)";

            index = 0;

        },1000);
    }
}

setInterval(passarSlide,3000);