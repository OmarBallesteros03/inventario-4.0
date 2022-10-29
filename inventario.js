class Inventario{
    constructor(){
        this.primero = null;
    }

    agregarProducto(producto){
        if(this.primero ==null){
            this.primero = producto;
        } else {
            let temp = this.primero;
            while (temp.next != null){
                temp = temp.next;
            }
            temp.next = producto;
        }
        }

    eliminarProducto(code){
            if(this.primero != null){
                if(this.primero.code === code){
                    this.primero = this.primero.next;
                }
            }
        }
        
    }

    buscar(code){
            let inicio = 0;
            let fin = this.inventario.length-1;
            let buscado;
            let encontrado = false;
            let mitad;
         
            while (encontrado === false && inicio <= fin) {
                mitad = Math.floor((incio + fin)/2);
                if (this.inventario[mitad] == code) {
                    encontrado = true;
                    buscado = this.inventario[mitad];
                } else if (this.inventario[mitad] > code) {
                    fin = mitad - 1;
                } else {
                    incio = mitad + 1;
                }
            }
            return buscado;
        }

    listar(){
        let lista = "";
        for(let i = 0; i = this.inventario.length-1; i++){
            lista += this.inventario[i].info();
        }
        return lista;

    }

    listadoInverso(){
        let listaInversa = "";
        for(let i = this.inventario.length-1; i >= 0; i--){
            listaInversa += this.inventario[i].info();
        }
    }

}

class Producto{
    constructor(code, name, amount, cost){
        this.code = code;
        this.name = name;
        this.amount = amount;
        this.cost = cost;
        this.next = null;

    }

    info(){
        return `Código: ${this.code} | Nombre: ${this.name} | Cantidad: ${this.amount} | Costo: ${this.cost}`
    }

}

let inventario = new Inventario()