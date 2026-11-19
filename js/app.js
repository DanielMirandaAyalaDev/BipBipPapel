// js/app.js

const URL_JSON = '/InfoProductos/info_productos.json'
const contenedor = document.getElementById('contenedor-productos');

// Función principal que se ejecuta al cargar la página
async function init() {
  // 1. Intentar leer desde localStorage
  const productosGuardados = obtenerProductos(); // de storage.js
  if (productosGuardados && productosGuardados.length > 0) {
    // 2a. Si hay datos en storage, renderizar desde ahí
    renderizarProductos(productosGuardados);
  } else {
    // 2b. Si no hay, cargar desde JSON
    const productos = await cargarProductosDesdeJSON();
    guardarProductos(productos); // de storage.js
    renderizarProductos(productos);
  }
}

// Cargar JSON con fetch
async function cargarProductosDesdeJSON() {
  try {
    const respuesta = await fetch(URL_JSON);
    if (!respuesta.ok) throw new Error('No se pudo cargar el JSON');
    
    const datos = await respuesta.json();
    
    if (datos.categorias) {
      let todosLosProductos = [];
      
      datos.categorias.forEach((categoria) => {
        // Aquí le inyectamos el nombre de la categoría a cada producto
        const productosConCategoria = categoria.productos.map(producto => {
            return {
                ...producto, // Copia todas las propiedades del producto (id, nombre, precio, etc.)
                categoria: categoria.nombre // Le agrega esta nueva propiedad
            };
        });
        
        todosLosProductos = todosLosProductos.concat(productosConCategoria);
      });
      
      return todosLosProductos;
    } 
    
    return datos;

  } catch (error) {
    console.error('Error al cargar productos:', error);
    return [];
  }
}

// Renderizar las cards en el DOM
function renderizarProductos(productos) {
  contenedor.innerHTML = ''; // limpiar antes de renderizar

  if (productos.length === 0) {
    contenedor.innerHTML = '<p class="text-center">No hay productos disponibles.</p>';
    return;
  }

  productos.forEach((producto) => {
    const card = crearCard(producto);
    contenedor.appendChild(card);
  });
}

// Crear una card de Bootstrap para un producto
function crearCard(producto) {
  const columna = document.createElement('div');
  columna.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4';

  columna.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text text-muted small">${producto.categoria}</p>
        <p class="card-text">${producto.descripcion}</p>
        <p class="fw-bold mt-auto">$${producto.precio}</p>
        <button class="btn btn-primary btn-sm">Ver más</button>
      </div>
    </div>
  `;

  return columna;
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', init);