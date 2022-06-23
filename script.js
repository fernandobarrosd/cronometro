const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");
const btnIniciar = document.querySelector("#cronometro-action-iniciar");
const btnParar = document.querySelector("#cronometro-action-parar");
const btnResetar = document.querySelector("#cronometro-action-resetar");
let countS = 0;
let countM = 0;
let interval = null;


btnIniciar.addEventListener("click", () => {
    interval = setInterval(() => {
        setCount(segundos, countS);
        if (countS == 60) {
            countS = 0;
            countM ++;
            segundos.textContent = "00";
            setCount(minutos, countM);
        }
        countS ++;
    }, 1000);
});


btnParar.addEventListener("click", () => {
    clearInterval(interval);
})

btnResetar.addEventListener("click", () => {
    countS = 0;
    countM = 0;
    segundos.textContent = "00";
    minutos.textContent = "00";
})

function setCount(element, value) {
    if (value < 10) {
        element.textContent = "0" + value;
    }
    else {
        element.textContent = value;
    }
}