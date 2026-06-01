// Función para mostrar el color seleccionado
function mostrarColor() {

    let colorSeleccionado =
        document.getElementById("cmbColor").value;

    document.getElementById("divColor")
        .style.backgroundColor = colorSeleccionado;
}


// Función para mostrar la imagen seleccionada
function mostrarImagen() {

    let opcion =
        document.getElementById("cmbVehiculo").value;

    let imagen =
        document.getElementById("imgVehiculo");

    switch (opcion) {

        case "carro":
            imagen.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdG4QwHRVm1vQO_2nglpBbE3FIabEFcDimdA&s";
            break;

        case "moto":
            imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCvGF4CrNrUlM30ERlz6kZvABIcS7XTlFYg&s";
            break;

        case "bicicleta":
            imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwn_FoVRxYSrGFA_qMdsYx2DJ8KoWKR9MyA&s";
            break;
    }
}