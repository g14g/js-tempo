// const barraProgresso = document.getElementById("progress");
const barraProgresso = document.querySelector("#progress");
const loadinTitle = document.querySelector("#loading-title");

barraProgresso.style.width = 0;

let contatore = 0;
let secondi = 0;

const progressoBarra = setInterval(function() {
    // debugger;

    // console.log(contatore);

    if (contatore % 10 == 0) {
        secondi = contatore / 10;
        console.log(secondi);
    }
    
    loadinTitle.innerHTML = `Loading... ${contatore}% / ${secondi}s`;
    barraProgresso.style.width = `${contatore}%`;
    // barraProgresso.style.backgroundColor = `rgba(${255 - (contatore * 255 / 100)}, ${contatore * 255 / 100}, ${contatore * 255 / 100 / 2}, 1)`;
    barraProgresso.style.backgroundColor = `rgba(255, ${contatore * 255 / 100}, 0, 1)`;

    if (contatore == 100) {
    // if (contatore == 50) {
        clearInterval(progressoBarra);
        console.log("Tempo scaduto");
        loadinTitle.innerHTML = `Caricamento completato in: ${secondi} secondi`;
    }

    contatore++;

}, 100);