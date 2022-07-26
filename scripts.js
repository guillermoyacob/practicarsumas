let numero = document.getElementById("numero");
let input = document.getElementById("input");
let boton = document.getElementById("boton");
let feedback = document.getElementById("feedback");

let numeroAleatorio1 = Math.round(Math.random() * 10);
let numeroAleatorio2 = Math.round(Math.random() * 10);

let resultado = numeroAleatorio1 + numeroAleatorio2;

numero1.textContent = numeroAleatorio1;
numero2.textContent = numeroAleatorio2;

input.focus();

const match = () => {
    if (input.value == resultado) {
        feedback.textContent = "¡Genial!";
        setTimeout(() => location.reload(true), 2000);
    }
    else {
        input.value = "";
        input.focus();
        feedback.textContent = "Incorrecto";
    }
}


input.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        match()
    }
})

boton.addEventListener('click', () => {
    match();
})