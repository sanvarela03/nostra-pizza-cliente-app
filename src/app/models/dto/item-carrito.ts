export class ItemCarrito {
    idProducto: number=-1;
    cantidad: number=-1;
    constructor(id: number, cantidad: number){
        this.idProducto=id;
        this.cantidad=cantidad;
    }
}
