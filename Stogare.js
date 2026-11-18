function guardarProducto(){
    let arrayProductos=[]

    //se agregarn los productos a un Arrray para recorrer los productos seleccionados
    for(i = 0 ; i<arrayProductos.length; i++){
        arrayProductos.append(localStorage.getItem(i));

    }

    /**
     * Necesitamos definir el nombre de la funcion para agregar los productos
     */

    arrayProductos.forEach(producto=> addProducto(producto));
}

guardarProducto();