const minutosEl = document.querySelector('#minutos');
const segundosEl = document.querySelector('#segundos');
const milissegundosEl = document.querySelector('#milissegundos');
const iniciarBtn = document.querySelector('#iniciarBtn');
const pausarBtn = document.querySelector('#pausarBtn');
const continuarBtn = document.querySelector('#continuarBtn');
const resetarBtn = document.querySelector('#resetarBtn');

let intervalo;
let minutos = 0;
let segundos = 0;
let milissegundos = 0;
let pausado = false;

iniciarBtn.addEventListener('click', iniciarTempo);
pausarBtn.addEventListener('click', pausarTempo);
continuarBtn.addEventListener('click', continuarTempo);
resetarBtn.addEventListener('click', resetarTempo);

function iniciarTempo() {

    intervalo = setInterval(() => {

        if (!pausado) {

            milissegundos += 10

            if(milissegundos === 1000) {
                segundos ++;
                milissegundos = 0;
            }

            if(segundos === 60) {
                minutos ++;
                segundos =0;
            }

            minutosEl.textContent = formaTempo(minutos);
            segundosEl.textContent = formaTempo(segundos);
            milissegundosEl.textContent = formaMilissegundos(milissegundos);
        }

    }, 10)
    iniciarBtn.style.display = 'none';
    pausarBtn.style.display = 'block';
}

function pausarTempo() {
    pausado = true;
    pausarBtn.style.display = 'none';
    continuarBtn.style.display = 'block';
}

function continuarTempo() {
    pausado = false;
    continuarBtn.style.display = 'none';
    pausarBtn.style.display = 'block';
}

function resetarTempo() {
    clearInterval(intervalo);
    pausado = false;

    minutos = 0;
    segundos = 0;
    milissegundos = 0;

    minutosEl.textContent = "00"
    segundosEl.textContent = "00"
    milissegundosEl.textContent = "000"

    iniciarBtn.style.display = "block"
    pausarBtn.style.display = "none"
    continuarBtn.style.display = "none"
}

function formaTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

function formaMilissegundos(tempo) {
    return tempo < 100 ? tempo.padStart(3 , "0") : tempo;
}