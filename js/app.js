// Implementar solución aquí

//Intenta primero simplemente recuperar el elemento del DOM al que debes aplicar el evento click

function handleClick() {
    console.log("Botón clickeado");

    const colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    document.querySelector("body").style.backgroundColor = colorAleatorio;

    console.log("Color generado:", colorAleatorio);

    document.querySelector("#hex-value").textContent = colorAleatorio;
}

function generateHexColor() {
    let hex = '#';
    const chars = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        hex += chars[Math.floor(Math.random() * 16)];
    }
    return hex;
}

document.querySelector("#btn").addEventListener("click", handleClick);