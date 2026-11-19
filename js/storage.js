// js/storage.js

// Definimos una "llave" (key) para identificar nuestros datos en el navegador.
// Usar una constante evita errores de tipeo.
const STORAGE_KEY = 'productos_tamapapel'; 

/**
 * Guarda un arreglo de productos en el localStorage.
 * @param {Array} productos - El arreglo de objetos que viene del JSON.
 */
function guardarProductos(productos) {
    try {
        // localStorage solo guarda texto (strings).
        // JSON.stringify convierte nuestro arreglo de objetos en un texto plano.
        const productosTexto = JSON.stringify(productos);
        localStorage.setItem(STORAGE_KEY, productosTexto);
        console.log("✅ Productos guardados en localStorage exitosamente.");
    } catch (error) {
        console.error("❌ Error al guardar en localStorage:", error);
    }
}

/**
 * Recupera los productos guardados en el localStorage.
 * @returns {Array|null} - Devuelve el arreglo de productos, o null si no hay nada.
 */
function obtenerProductos() {
    try {
        // Buscamos el texto en el localStorage usando nuestra llave.
        const productosTexto = localStorage.getItem(STORAGE_KEY);
        
        // Si no hay nada guardado (primera visita), devolvemos null.
        if (!productosTexto) {
            return null;
        }

        // Si hay texto, lo convertimos de vuelta a un arreglo de objetos de JS.
        const productos = JSON.parse(productosTexto);
        console.log("📦 Productos recuperados desde localStorage.");
        return productos;

    } catch (error) {
        console.error("❌ Error al leer o parsear localStorage:", error);
        return null;
    }
}