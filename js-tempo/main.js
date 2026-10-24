// ██████████ MILESTONE 1

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
        // console.log(secondi);
    }
    
    loadinTitle.innerHTML = `Loading... ${contatore}% / ${secondi}s`;
    barraProgresso.style.width = `${contatore}%`;
    // barraProgresso.style.backgroundColor = `rgba(${255 - (contatore * 255 / 100)}, ${contatore * 255 / 100}, ${contatore * 255 / 100 / 2}, 1)`;
    barraProgresso.style.backgroundColor = `rgba(255, ${contatore * 255 / 100}, 0, 1)`;

    if (contatore == 100) {
    // if (contatore == 50) {
        clearInterval(progressoBarra);
        // console.log("Tempo scaduto");
        loadinTitle.innerHTML = `Caricamento completato in: ${secondi} secondi`;
    }

    contatore++;

}, 100);

// ██████████ MILESTONE 2

const playBtn = document.querySelector("#play-btn");
const stopBtn = document.querySelector("#stop-btn");
const resetBtn = document.querySelector("#reset-btn");

const contatoreTimer = document.querySelector("#cronometro");
let contatoreTempo;
let tempoTrascorso = 0;

function aggiornaContatore(tempo) {
    contatoreTimer.innerHTML = `${tempo}s`
}

playBtn.addEventListener("click", (e) => {
    // e.preventDefault();
    console.log("Ho cliccato su Avvia timer");
    
    contatoreTempo = setInterval(function() {
        // console.log(tempoTrascorso);
        aggiornaContatore(tempoTrascorso);
        tempoTrascorso++;
    }, 1 * 1000);
    
    // console.log(e.target);
    // e.target.disabled = true;
    playBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
    
});

stopBtn.addEventListener("click", (e) => {
    console.log("Ho cliccato su Stop timer");
    clearInterval(contatoreTempo);
    playBtn.disabled = false;
    resetBtn.disabled = false;
});

resetBtn.addEventListener("click", (e) => {
    console.log("Ho cliccato su Reset timer");
    clearInterval(contatoreTempo);
    tempoTrascorso = 0;
    aggiornaContatore(tempoTrascorso);
    playBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
});