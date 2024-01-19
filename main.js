

let nombre = prompt("Ingresa tu nombre").toLowerCase();
let cliente = prompt("¿Eres cliente? (Responde si o no)").toLowerCase();
while (nombre != "") {
    if (cliente === "si") {
        alert(`Bienvenido/a ${nombre} gracias por utilizar nuestra calculadora`);

        function precio(precioPlan, precioSucursales) {
            resultado = precioPlan + precioSucursales;
        }
        let precioPlan = Number(prompt("Ingrese el valor de su plan"))
        let numeroSucursales = Number(prompt("Número de sucursales que necesita"))
        let precioSucursales = numeroSucursales * 23990
        precio(precioPlan, precioSucursales)
        alert(`El valor final a pagar sería: ${resultado}`);
    } else {
        alert("Hazte cliente");
    }
}


