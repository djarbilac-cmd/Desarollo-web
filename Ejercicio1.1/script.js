function solicitarDato() {
    let dato = prompt("Introduce un dato:"); // Muestra la ventana emergente
    if (dato !== null) { // Verifica si el usuario introdujo un dato y no canceló
        document.getElementById("resultado").textContent = dato; // Muestra el dato en el párrafo
    }
}