function realizarCompra() {
    let productoElegido = parseInt(document.getElementById("producto").value);
    let cantidadElegida = parseInt(document.getElementById("cantidad").value);

    let precioProducto, cantidadDisponible;
    switch (productoElegido) {
        case 1:
            precioProducto = 700;
            cantidadDisponible = 100;
            break;
        case 2:
            precioProducto = 700;
            cantidadDisponible = 100;
            break;
        case 3:
            precioProducto = 550;
            cantidadDisponible = 100;
            break;
        default:
            document.getElementById("mensaje").innerText = "Producto inválido.";
            return;
    }

    if (cantidadElegida <= 0 || isNaN(cantidadElegida)) {
        document.getElementById("mensaje").innerText = "Cantidad inválida.";
        return;
    }

    if (cantidadElegida > cantidadDisponible) {
        document.getElementById("mensaje").innerText = "No hay suficiente cantidad disponible.";
        return;
    }

    let totalCompra = precioProducto * cantidadElegida;
    document.getElementById("mensaje").innerText = "Total a pagar: $" + totalCompra;
}
