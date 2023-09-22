function limpiarCasillas() {
    document.getElementById("miFormulario").reset();
}

function registrarCasillas() {
    const cuenta = document.getElementById("cuenta").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const color = document.getElementById("color").value;

    // Crear un objeto con los datos del formulario
    const formData = {
        cuenta,
        nombre,
        apellido,
        edad,
        color
    };

    // Enviar los datos al servidor Node.js para su registro
    fetch('/registrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        limpiarCasillas();
    })
    .catch(error => console.error('Error al registrar:', error));
}