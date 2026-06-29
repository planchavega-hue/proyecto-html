// ============================================
// script.js
// Validación de campos y mensaje de confirmación
// ============================================

document.addEventListener("DOMContentLoaded", function () {

  const formulario = document.getElementById("formContacto");

  formulario.addEventListener("submit", function (evento) {

    let formularioValido = true;

    // Reiniciar estilos de validación
    formulario.classList.remove("was-validated");

    // Validar campos obligatorios usando la validación nativa de Bootstrap
    if (!formulario.checkValidity()) {
      evento.preventDefault();
      evento.stopPropagation();
      formularioValido = false;
    }

    formulario.classList.add("was-validated");

    // Validación adicional de ejemplo: nombre no debe estar vacío de espacios
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre.length === 0) {
      formularioValido = false;
    }

    // Si todo es válido, mostrar mensaje de confirmación antes de enviar
    if (formularioValido) {
      const confirmar = confirm("¿Estás seguro de que deseas enviar tu solicitud de reparación?");
      if (!confirmar) {
        evento.preventDefault();
      } else {
        mostrarMensajeExito();
      }
    }

  });

});

// Función que muestra un mensaje de éxito en pantalla
function mostrarMensajeExito() {
  const alerta = document.createElement("div");
  alerta.className = "alert alert-success text-center mt-3";
  alerta.textContent = "¡Gracias! Tu solicitud está siendo enviada...";

  const formulario = document.getElementById("formContacto");
  formulario.parentNode.insertBefore(alerta, formulario.nextSibling);
}
