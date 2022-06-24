const minutos = document.querySelector("#minutes");
const segundos = document.querySelector("#seconds");
const btnIniciar = document.querySelector("#cronometro-action-iniciar");
const btnParar = document.querySelector("#cronometro-action-parar");
const btnResetar = document.querySelector("#cronometro-action-resetar");
let countS = 0;
let countM = 0;
let interval = null;


btnIniciar.addEventListener("click", () => {
    interval = setInterval(() => {
        setCount(segundos, countS);
        startCount();
    }, 200);
});


btnParar.addEventListener("click", () => {
    clearInterval(interval);
})

btnResetar.addEventListener("click", () => {
    countReset();
})


function countReset() {
    countS = 0;
    countM = 0;
    segundos.textContent = "00";
    minutos.textContent = "00";
}

function setMinutesSeconds() {
    countS = 0;
    countM ++;
    segundos.textContent = "00";
    setCount(minutos, countM);
}


function startCount() {
    setCount(segundos, countS);
    if (countS == 15) {
        setMinutesSeconds();
    }
    countS ++;
}

function setCount(element, value) {
    if (value < 10) {
        element.textContent = "0" + value;
    }
    else {
        element.textContent = value;
    }
}