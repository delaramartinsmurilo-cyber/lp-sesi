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

const cards = document.querySelectorAll('#s2, card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            cards.forEach((cards, index) => {
                setTimeout(() => {
                    cards.classList.add('visible');

                }, index * 500);
            });
        }
    })
})

observer.observe(document.querySelector('#s2'))

function enviar(){
    const nome = document.getElementById('nome').value
    const assunto = document.getElementById('assunto').value
    const mensagem = `gostaria de entrar em contato'\n\nNome: ${nome}\nAssunto: ${assunto}`
    const msg = encodeURIComponent(mensagem)
    window.open(`https://wa.me/0000000000000000000?text=${msg}`)
}