import { obtenerProductos } from "./utils.js";

const render = async () => {
    const crearProducto = (id, nombre, imagen, precio) => {
        const sbet = document.querySelector(".sbet");

        const item = document.createElement("div");
        item.classList.add("sbetItem");
        item.id = id;

        const image = document.createElement("img");
        image.classList.add("sbetItem__image");
        image.alt = nombre;
        image.src = imagen;

        const title = document.createElement("h2");
        title.classList.add("sbetItem__title");
        title.textContent = nombre;

        const price = document.createElement("p");
        price.classList.add("sbetItem__price");
        price.textContent = `$${precio}`;

        item.appendChild(image);
        item.appendChild(title);
        item.appendChild(price);
        sbet.appendChild(item);

        item.addEventListener("click", () => {
            window.location.href = `producto1.html?id=${id}`;
        });
    };

    const productos = await obtenerProductos();
       for (const producto of productos) {
        crearProducto(producto.id, producto.name, producto.image, producto.price);
        }
};

document.addEventListener('DOMContentLoaded', render);