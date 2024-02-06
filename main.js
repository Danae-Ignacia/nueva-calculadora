
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
let nombre =  prompt("Ingresa tu nombre").toUpperCase();
let email = prompt("Ingrese su email");

const usuarioRegistrado = new Usuario({nombre, email});
usuarioRegistrado.saludo();

//arreglo planes, uso push para agregar items
class Plan {
  constructor(sku, nombrePlan, precio){
      this.sku = sku;
      this.nombrePlan = nombrePlan;
      this.precio = precio;
  }
}

const planes = [];
planes.push(new Plan(1234, "básico", 1200 ));
planes.push(new Plan(12345, "estándar", 1400 ));
planes.push(new Plan(123456, "full", 1600 ));


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


//calculadora nuevo precio
if (nombrePlan != "") {
    const suma = (x, y) => x + y;
    const oferta = (x, y) => x - y;
    const iva = (x) => x * 0.19;
    
    let precioProducto = Number(prompt("Ingrese el precio del plan"));
    let descuento = Number(prompt("Ingrese el descuento asignado (máximo 500)"));
    
    let nuevoPrecio = oferta(suma(precioProducto, iva(precioProducto)), descuento);
    alert (`Excelente tu plan queda en ${nuevoPrecio}, mensual`);
}

//validación cupón uso de length e includes
const descuentos = ["cupon1", "cupon2", "cupon2","cupon3","cupon4"];
let cuponDescuento = prompt("Ingresa tu cupón");

for (let i = 0; i < descuentos.length; i++){
if (descuentos.includes(cuponDescuento)){
    alert("Cupón vigente")
} else{
    alert("Cupón expirado")
}
}