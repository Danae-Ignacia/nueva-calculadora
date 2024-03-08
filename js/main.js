// Variables
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async () => {
  const response = await fetch("data.json");
  const data = await response.json();
  // Div de producto para agregar al HTML 
data.forEach((product) => {
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
    if (repeat) {
      carrito.map((item) => {
        if (item.id === product.id) {
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
    guardarCarrito();
  });
});
};

getProducts();


//localStorage set item para guardar productos
const guardarCarrito = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//localStorage get item para recuperar productos
JSON.parse(localStorage.getItem("carrito"));

