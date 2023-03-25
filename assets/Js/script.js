
const botao = document.querySelector('#down-arrow');

botao.addEventListener('click', () => {
    window.scroll({ top: window.innerHeight, behavior: 'smooth' })
})