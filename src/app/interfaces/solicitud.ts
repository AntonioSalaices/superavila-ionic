export interface Solicitud {
    id?: string;
    nombre_empleado: string;
    sucursal:string;
    proveedor: string;
    insumo_nombre:string;
    descripcion:string;
    marca:string;
    cantidad_solicitada:number;
    cantidad_recibida?:number;
    precio_unidad:number;
    estado_solicitud?:boolean;
    total:number;
    observacion?:string;
    fechaEmision?: any;
}
