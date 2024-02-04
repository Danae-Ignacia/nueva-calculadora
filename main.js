
//Bienvenida 
alert(`Hola, gracias por utilizar nuestra calculadora!`);
class Usuario {
  constructor(info) {
    this.nombre = info.nombre;
    this.email = info.email;
  }
  saludo() {
    alert (`Bienvenido(a) ${this.nombre}, manos a la obra!`);
  }
}
//Registro Objeto
let nombre =  prompt("Ingresa tu nombre").toLowerCase();
let email = prompt("Ingrese su email");

const usuarioRegistrado = new Usuario({nombre, email});
usuarioRegistrado.saludo();

//arreglo planes
const planes = [
  { sku: 1221, nombrePlan: "basico", precio: 1000 },
  { sku: 2331, nombrePlan: "estandar", precio: 1750 },
  { sku: 1332, nombrePlan: "full", precio: 2320 },
];

//Busqueda
const busqueda = (nombrePlan) => {
  let planEncontrado;
  for (const plan of planes) {
    if (plan.nombrePlan === nombrePlan) {
      planEncontrado = plan;
    }
  }

  if (planEncontrado) {
    alert(`
      sku: ${planEncontrado.sku}
      nombrePlan: ${planEncontrado.nombrePlan}
      Precio: ${planEncontrado.precio}
    `);
  }
};

let nombrePlan = prompt("¿Qué Plan busca?");
busqueda(nombrePlan);


if (nombrePlan != "") {
    const suma = (x, y) => x + y;
    const oferta = (x, y) => x - y;
    const iva = (x) => x * 0.19;
    
    let precioProducto = Number(prompt("Ingrese el precio del plan"));
    let descuento = Number(prompt("Ingrese el descuento asignado (máximo 500)"));
    
    let nuevoPrecio = oferta(suma(precioProducto, iva(precioProducto)), descuento);
    alert (`Excelente tu plan queda en ${nuevoPrecio}, mensual`);
}

