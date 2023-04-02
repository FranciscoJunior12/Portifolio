
const botao = document.querySelector('#down-arrow');

botao.addEventListener('click', () => {
    window.scroll({ top: window.innerHeight, behavior: 'smooth' }) ;
})





const observer = new IntersectionObserver(entries => {



    Array.from(entries).forEach(entry => {

        if (entry.intersectionRatio >= 0.8) {

            entry.target.classList.add('init-hidden-off');

        } else {

            entry.target.classList.remove('init-hidden-off');

        }
    });


},
    { threshold: 1 });

Array.from(document.querySelectorAll('.init-hidden')).forEach(elemento => {

    observer.observe(elemento);

})






// Efeito de digitação 

var palavras = [" Web Developer", "Freelancer"];
var i = 0;
var j = 0;
var deletar = false;
var piscarCursor = true;

function escrever() {
    var texto = palavras[i].substring(0, j);
    document.getElementById("texto").innerHTML = texto;
    j++;

    if (j > palavras[i].length) {
        deletar = true;
        setTimeout(function () {
            deletar = false;
        }, 1000);
    }

    if (j === 0 && deletar) {
        i++;
        if (i >= palavras.length) {
            i = 0;
        }
    }

    if (!deletar && j <= palavras[i].length) {
        setTimeout(escrever, 100);
    } else {
        setTimeout(deletarTexto, 2000);
    }
}

function deletarTexto() {
    var texto = palavras[i].substring(0, j);
    document.getElementById("texto").innerHTML = texto;
    j--;

    if (j < 0) {
        i++;
        if (i >= palavras.length) {
            i = 0;
        }
        setTimeout(escrever, 500);
    } else {
        setTimeout(deletarTexto, 100);
    }
}

setInterval(function () {
    var cursor = document.querySelector(".cursor");
    cursor.style.visibility = piscarCursor ? "visible" : "hidden";
    piscarCursor = !piscarCursor;
}, 500);

escrever();








