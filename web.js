function toggleDetalle(parte) {
    // Obtiene los detalles de la parte seleccionada
    let detallesParte = document.querySelectorAll(`#detalle${parte}, #detalle${parte+1}, #detalle${parte+2}, #detalle${parte+3}, #detalle${parte+4}, #detalle${parte+5}`);

    // Verifica si al menos uno de los detalles está visible
    let algunActivo = Array.from(detallesParte).some(detalle => detalle.style.display === "block");

    // Oculta todos los detalles
    document.querySelectorAll('.detalle').forEach(detalle => detalle.style.display = 'none');

    // Si no estaba activo, mostrar los detalles de la parte seleccionada
    if (!algunActivo) {
        detallesParte.forEach(detalle => detalle.style.display = "block");
    }
}

