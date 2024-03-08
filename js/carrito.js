// Crear modal
const gestionarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
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
      modalContainer.style.display = "none";
    });
  
    modalHeader.append(modalButton);
  
    //Mostrar productos en el modal
    carrito.forEach((product) => {
      let carritoContent = document.createElement("div")
      carritoContent.className = "modal-content"
      carritoContent.innerHTML = `
      <h3>${product.nombre}</h3>
      <p> ${product.precio}</p>
      <span class="restar"> <i class="fas fa-minus"></i> </span>
      <p>Cantidad: ${product.cantidad}</p>
      <span class="sumar"> <i class="fas fa-plus"></i> </span>
      <p> Total: $ ${product.cantidad * product.precio}</p>
      <span class="borrar-productos"> <i class="fas fa-trash"></i> </span>
      `;
  
      modalContainer.append(carritoContent);
  
  
      // Restar cantidades desde el modal
      let restar = carritoContent.querySelector(".restar");
      restar.addEventListener("click", () => {
        if (product.cantidad !== 1) {
          product.cantidad--;
        }
        gestionarCarrito();
        guardarCarrito();
      });
  
      // Sumar cantidades desde el modal 
      let sumar = carritoContent.querySelector(".sumar");
      sumar.addEventListener("click", () => {
        product.cantidad++;
        gestionarCarrito();
        guardarCarrito();
      });
  
      let eliminar = carritoContent.querySelector(".borrar-productos");
      eliminar.addEventListener("click", ()=> {
        borrarProduct(product.id);
      } );
  
  
    });
  
    // Sumar total de Carrito
    const total = carrito.reduce((acum, item) => acum + item.precio * item.cantidad, 0);
    const totalCoti = document.createElement("div")
    totalCoti.className = "total-cotizacion"
    totalCoti.innerHTML = `La suma es: $ ${total}`;
    modalContainer.append(totalCoti);
   
    const comprarButton = document.createElement("p");
    comprarButton.innerHTML = `
    <p class="btn-comprar">comprar</p>`;
    modalContainer.append(comprarButton);
  
  comprarButton.className = "comprarButton";
  comprarButton.addEventListener("click", () => {
    localStorage.clear(); 
    location.reload(); 
    
  });
  };
  
  
  
  verCarrito.addEventListener("click", gestionarCarrito);
  
  // Busqueda y filtro para borrar producto
  const borrarProduct = (id) => {
    const encontrarId = carrito.find((item) => item.id == id);
  
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