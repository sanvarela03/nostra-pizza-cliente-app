import { TipoDeProducto } from "./tipo-de-producto";

export class Producto {

    id: number = -1;
    nombre: string = "";
    descripcion: string = "";
    precio: number = -1;
    tiempoEstimadoDePreparacion: number = -1;
    tipoDeProducto: TipoDeProducto = new TipoDeProducto();
    cantidad: number = 0;

}
