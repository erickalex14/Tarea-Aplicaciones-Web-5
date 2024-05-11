const formularioCliente = document.getElementById('formulario-cliente');

formularioCliente.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correoElectronico = document.getElementById('correo_electronico').value;
    const telefono = document.getElementById('telefono').value;

    // Validar los datos ingresados

    if (nombre === '' || apellido === '' || correoElectronico === '' || telefono === '') {
        alert('Todos los campos son obligatorios');
        return;
    }

    // Enviar los datos a un servidor (por ejemplo, usando AJAX)

    const datosCliente = {
        nombre: nombre,
        apellido: apellido,
        correoElectronico: correoElectronico,
        telefono: telefono
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://blog.hubspot.es/website/que-es-servidor-web');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
        if (xhr.status === 200) {
            alert('Datos del cliente guardados correctamente');
            formularioCliente.reset();
        } else {
            alert('Error al guardar los datos del cliente');
        }
    };
    xhr.send(JSON.stringify(datosCliente));
});