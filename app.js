const miInv = new Inventario();

const agregar=document.getElementById("btnAgregar");
agregar.addEventListener('click',(e)=>{
    const nombre=document.getElementById("nombre").value;
    const codigo = document.getElementById("codigo").value;
    const cantidad = document.getElementById("cantidad").value;
    const costo = document.getElementById("costo").value;

    const producto = new Producto(nombre, codigo, cantidad, costo);
    miInv.agregarProducto(producto);
    document.getElementById("listado").innerHTML="<p>El producto fue agregado correctamente.</p>"
    e.preventDefault()
})

const eliminar=document.getElementById("btnEliminar");
eliminar.addEventListener('click',(e)=>{
    const producto = miInv.eliminar(document.getElementById("delCodigo").value);
    document.getElementById("delCodigo").value = ``;
    if(producto == true)
        document.getElementById("listado").innerHTML =
        `<h3>El producto se eliminó con exito.</h3>`;
    else 
        document.getElementById("listado").innerHTML =
        `<h3>El producto que desea eliminar no existe.</h3>`;
})

const buscar=document.getElementById("buscar");
buscar.addEventListener('click',(e)=>{
    const producto = miInv.buscar(document.getElementById("busCodigo").value);
    document.getElementById("busCodigo").value = ``;
    if(producto != null)
        return `${producto.informacionProducto()}`;
    else
        document.getElementById("listado").innerHTML = 
        `<h3>El producto que desea buscar no existe.</h3>`;
})

const listar=document.getElementById("btnlistar");
listar.addEventListener('click',(e)=>{
    if(miInv.listar())
    document.getElementById("listado").innerHTML = `${miInv.listar()}`;
    else
        document.getElementById("listado").innerHTML =
        `<h3>No hay productos en el almacen.</h3>`;
})

const listarInverso=document.getElementById("listarInverso");
listarInverso.addEventListener('click',()=>{
    if(miInv.listarInverso())
    document.getElementById("listado").innerHTML = `${miInv.listarInverso()}`;
else
    document.getElementById("listado").innerHTML =
    `<h3>No hay productos en el almacen.</h3>`;
})