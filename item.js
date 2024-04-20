
import { obtenerProductoPorId } from "./utils.js";

const render = async () => {
  const params = new URLSearchParams(window.location.search);
  
  const id = params.get('id');

  const producto = await obtenerProductoPorId(parseInt(id));

  const refer = document.querySelector(".alinear");
  refer.src = producto.image;
  refer.alt = producto.name;

  const titulo = document.querySelector(".subtext");
  titulo.textContent = producto.name;

  const descripción = document.querySelector(".item_description");
  descripción.textContent = producto.description;


  const precio = document.querySelector(".item_price");
    precio.textContent = `$${producto.price}`;

  const contadorProductos = document.querySelector("#contador_productos");
  const car = document.querySelector(".carrito");
  let contador = 0;
  car.addEventListener("click",function () {
     contador++;
     contadorProductos.textContent = `Productos agregados al carrito: ${contador}`;
    
  });
  
  
}

document.addEventListener('DOMContentLoaded', render);