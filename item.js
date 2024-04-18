
import { obtenerProductoPorId } from "./utils.js";

const render = async () => {
  const params = new URLSearchParams(window.location.search);
  
  const id = params.get('id');

  const producto = await obtenerProductoPorId(parseInt(id));

  const refer = document.querySelector(".alinear");
  refer.src = producto.image;
  refer.alt = producto.name;

  const descripción = document.querySelector(".subtext");
  descripción.textContent = producto.description;

  const precio = document.querySelector(".item_price");
    precio.textContent = `$${producto.price}`;
}

document.addEventListener('DOMContentLoaded', render);