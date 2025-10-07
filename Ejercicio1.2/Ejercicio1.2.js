const listaColores = document.getElementById("listaColores");

    listaColores.addEventListener("change", function() {
        const colorSeleccionado = this.value; // Obtiene el valor del <option> seleccionado
    alert("Color seleccionado: " + colorSeleccionado); // Muestra el color en la alerta
    });