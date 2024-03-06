// Variables
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// Div de producto para agregar al HTML 
productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "box";
  content.innerHTML = `
  <img src="${product.img}" class="content-img">
  <h2 class="content-name">${product.nombre}</h2>
  <p class="content-price">$ ${product.precio}</p>
  `;
  shopContent.append(content);

  let agregar = document.createElement("button");
  agregar.innerText = "agregar";
  agregar.className = "btn-agregar"

  content.append(agregar);

  agregar.addEventListener("click", () => {
  
    //validar si el producto ya se agrego para no repetir el item si no que sumar cantidades
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    if(repeat){
      carrito.map((item) => {
        if (item.id === product.id){
          item.cantidad++;
        }
      });
    } else {
      //agregar al carrito
    carrito.push({
      id: product.id,
      img: product.img,
      nombre: product.nombre,
      precio: product.precio,
      cantidad: product.cantidad,
    });
  }
  carritoCounter();
  guardarCarrito ();
  });
});
//localStorage set item para guardar productos
const guardarCarrito = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  };
  
  //localStorage get item para recuperar productos
  JSON.parse(localStorage.getItem("carrito"));

// Crear modal
  const gestionarCarrito = () => {
  modalContainer.innerHTML="";
  modalContainer.style.display="flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header"
  modalHeader.innerHTML = `
  <h3 class="modal-header_title">Total</h3>
`;
  modalContainer.append(modalHeader);

  const modalButton = document.createElement("p");
  modalButton.innerText = "x";
  modalButton.className = "modal-header-button";
  modalButton.addEventListener("click", () => {
    modalContainer.style.display ="none";
  });

  modalHeader.append (modalButton);

  //Mostrar productos en el modal
  carrito.forEach((product) => {
    let carritoContent = document.createElement("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
    <h3>${product.nombre}</h3>
    <p> ${product.precio}</p>
    <p>Cantidad: ${product.cantidad}</p>
    <p> Total: $ ${product.cantidad * product.precio}</p>
    `;
    modalContainer.append(carritoContent);

// Boton borrar producto Carrito
    let borrar = document.createElement("span");
    borrar.innerText= "x";
    borrar.className = "borrar-product";
    carritoContent.append(borrar);

    borrar.addEventListener("click", borrarProduct);
});

// Sumar total de Carrito
 const total = carrito.reduce ((acum, item) => acum + item.precio * item.cantidad, 0);
  const totalCoti = document.createElement("div")
  totalCoti.className = "total-cotizacion"
  totalCoti.innerHTML = `La suma es: $ ${total}`;
  modalContainer.append(totalCoti);
};


verCarrito.addEventListener("click", gestionarCarrito);

// Busqueda y filtro para borrar producto
  const borrarProduct = () => {
  const encontrarId = carrito.find((item) => item.id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== encontrarId;
  });
  carritoCounter();
  guardarCarrito();
  gestionarCarrito();
};

const carritoCounter = () => {
  cantidadCarrito.style.display = "flex";

  const carritoLength = carrito.length;

  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();

