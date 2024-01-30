alert(`Hola, gracias por utilizar nuestra calculadora!`);
class Usuario {
  constructor(info) {
    this.nombre = info.nombre;
    this.email = info.email;
    this.fono = info.fono;
  }
  saludo() {
    alert (`Bienvenido(a) ${this.nombre}, manos a la obra!`);
  }
}
let nombre =  prompt("Ingresa tu nombre").toLowerCase();
let email = prompt("Ingrese su email");
let fono = prompt("Ingrese su fono");

const usuarioRegistrado = new Usuario({nombre, email, fono});
usuarioRegistrado.saludo();


while (nombre != "") {
    const suma = (x, y) => x + y;
    const oferta = (x, y) => x - y;
    const iva = (x) => x * 0.19;
    
    let precioProducto = Number(prompt("Ingrese el precio del producto"));
    let descuento = Number(prompt("Ingrese el descuento"));
    
    let nuevoPrecio = oferta(suma(precioProducto, iva(precioProducto)), descuento);

    alert(nuevoPrecio);
}


