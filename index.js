//clase producto

class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const producto1 = new Producto(1, "Mainboard", 300);
const producto2 = new Producto(2, "Procesador i3", 150);
const producto3 = new Producto(3, "Procesador i5", 250);
const producto4 = new Producto(4, "Procesador i7", 300);
const producto5 = new Producto(5, "Monitor Lg 19", 200);
const producto6 = new Producto(6, "Monitor Lg 22", 300);
const producto7 = new Producto(7, "Memoria ddr4 8GB", 30);
const producto8 = new Producto(8, "Memoria ddr4 16GB", 90);
const producto9 = new Producto(9, "Case Gamer", 80);
const producto10 = new Producto(10, "Impresora Epson", 300);

//Creamos Arreglo Pruductos
const productosArray = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
  producto9,
  producto10,
];

//buscar Elementos DOM

const divProductos = document.querySelector("#divProductos");

productosArray.forEach((producto) => {
  divProductos.innerHTML += `
        <div id="${producto.id}" class="card cardProducto">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$${producto.precio}</p>
        <button id="${producto.id}" class="btn btn-success">AGREGAR</button>
        </div>
        </div>
        
        `;
});

//carrito de compra

const carrito = [];
const botonesAgregar = document.querySelectorAll(".btn-success");
//console.log(botonesAgregar)

botonesAgregar.forEach((boton) => {
  boton.onclick = () => {
    const producto = productosArray.find(
      (prod) => prod.id === parseInt(boton.id)
    );
    const productoCarrito = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1,
    };

    const indexCarrito = carrito.findIndex((prod) => prod.id === producto.id);

    if (indexCarrito === -1) {
      carrito.push(productoCarrito);
    } else {
      carrito[indexCarrito].cantidad += 1;
    }
    console.log(carrito);
  };
});

//boton finalizar compra

const botonFinalizar = document.querySelector('#finalizar')
botonFinalizar.onclick = () => {
  const totalCompra = carrito
    .map((prod) => prod.precio * prod.cantidad)
    .reduce((a1, b1) => a1 + b1)
  alert(`El total de su compra es ${totalCompra}`)
}
