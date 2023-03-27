
const botao = document.querySelector('#down-arrow');

botao.addEventListener('click', () => {
    window.scroll({ top: window.innerHeight, behavior: 'smooth' })
})





const observer = new IntersectionObserver(entries => {

    

    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 1) {

            entry.target.classList.add('init-hidden-off')
        }
    })

},
    { threshold: 1 });

Array.from(document.querySelectorAll('.init-hidden')).forEach(elemento => {

    observer.observe(elemento);

})






