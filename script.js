const cronometroNumber = document.querySelector(".cronometro-number");
const cronometroActionsIniciar = document.querySelector("#cronometro-actions-iniciar");
const cronometroActionsParar = document.querySelector("#cronometro-actions-parar");
let interval = null;
let count = 1;


cronometroActionsIniciar.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(() => {
        cronometroNumber.textContent = count;
        count ++;
    }, 1000)
    
})


cronometroActionsParar.addEventListener("click", () => {
    clearInterval(interval);
    cronometroNumber.textContent = 0;
    count = 1;
    console.log(interval);
})

