const productos = [
    { id: 1, nombre: "Ark Survival Evolved",  precio: 150000, imagen: "../img/ark.webp" },
    { id: 2, nombre: "Battlefield 1", precio: 230000, imagen: "../img/bf.webp" },
    { id: 3, nombre: "God of War - Ragnarok", precio: 320000, imagen: "../img/god.webp" },
    { id: 4, nombre: "Gta VI", precio: 570000, imagen: "../img/gta.webp" },
    { id: 5, nombre: "Minecraft", precio: 30000, imagen: "../img/maikra.avif" },
    { id: 6, nombre: "No Mans Sky",  precio: 120000, imagen: "../img/no.avif" },
    
];

let carrito = [];

function mostrarProductos() {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = '';

    productos.forEach(producto => {
        const tarjetaProducto = document.createElement('div');
        tarjetaProducto.className = 'tarjeta-producto';
        tarjetaProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        listaProductos.appendChild(tarjetaProducto);
    });
}

function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const tablaCarritoBody = document.querySelector('#tabla-carrito tbody');
    const totalCarrito = document.getElementById('total-carrito');

    tablaCarritoBody.innerHTML = '';
    let total = 0;

    carrito.forEach((item, index) => {
        total += item.precio;
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td><img src="${item.imagen}" alt="${item.nombre}" width="50"></td>
            <td>${item.nombre}</td>
            <td>$${item.precio}</td>
            <td><button onclick="eliminarDelCarrito(${index})">Eliminar</button></td>
        `;
        tablaCarritoBody.appendChild(fila);
    });

    totalCarrito.textContent = total.toFixed(2);
}

function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}

document.getElementById('limpiar-carrito').onclick = () => {
    carrito = [];
    actualizarCarrito();
};

document.getElementById('cerrar-carrito').onclick = () => {
    document.getElementById('modal-carrito').style.display = 'none';
};

document.getElementById('boton-carrito').onclick = () => {
    document.getElementById('modal-carrito').style.display = 'flex';
};

mostrarProductos();
