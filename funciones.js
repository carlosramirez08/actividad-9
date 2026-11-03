function verificarEdad() {
    // Declaración de variables usando let y document.getElementById() con .value
    let edadTexto = document.getElementById("edadInput").value;
    let edad = Number(edadTexto);

    // Evaluación de condiciones (if, else if, else)
    if (edadTexto.trim() === "") {
        alert("Por favor, ingresa tu edad.");
    } else if (isNaN(edad) || edad < 0) {
        alert("Por favor, ingresa un número válido mayor o igual a cero.");
    } else if (edad >= 18) {
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
}