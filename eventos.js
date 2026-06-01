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
            imagen.src ="https://www.univision.com/_next/image?url=https%3A%2F%2Fst1.uvnimg.com%2Fd4%2F4a%2F006304a74db4902c0b4d8d8026c8%2Fchevrolet-corvette-c8-stingray-2020-1280-08.jpg&w=1280&q=75";
            break;

        case "moto":
            imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCvGF4CrNrUlM30ERlz6kZvABIcS7XTlFYg&s";
            break;

        case "bicicleta":
            imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwn_FoVRxYSrGFA_qMdsYx2DJ8KoWKR9MyA&s";
            break;
    }
}
