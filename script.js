//Variáveis iniciais
const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

//Controle dos botões da calculadora
document.querySelectorAll(".charKey").forEach(function (key) {
  key.addEventListener("click", function () {
    const value = key.dataset.value;
    input.value += value;
  });
});

document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.classList.remove("error");
  input.focus();
});

document.getElementById("equal").addEventListener("click", calculate);

//Controle do teclado
input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
});

//Calcular o resultado da operação
function calculate() {
  try {
    const result = eval(input.value);
    input.value = result;
    input.classList.remove("error");
  } catch (error) {
    input.classList.add("error");
    input.animate(animation, animationTiming);
  }
}

//Mudar o tema do site
document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});
