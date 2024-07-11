type VendedorActualizacion = 
  | VendedorActualizacionTipo0
  | VendedorActualizacionTipo1
  | VendedorActualizacionTipo2;

interface VendedorActualizacionBase {
  tipo: number;
  idProducto: number;
  fechaHora: Date;
  vendedor: string;
}

interface VendedorActualizacionTipo0 extends VendedorActualizacionBase {
  tipo: 0;
  contenidoPregunta: string;
  contenidoRespuesta: string;
}

interface VendedorActualizacionTipo1 extends VendedorActualizacionBase {
  tipo: 1;
}

interface VendedorActualizacionTipo2 extends VendedorActualizacionBase {
  tipo: 2;
}

type ProveedorActualizacion = 
  | ProveedorActualizacionTipo0
  | ProveedorActualizacionTipo1
  | ProveedorActualizacionTipo2
  | ProveedorActualizacionTipo3;

interface ProveedorActualizacionBase {
  tipo: number;
  idProducto: number;
  fechaHora: Date;
  proveedor: string;
}

interface ProveedorActualizacionTipo0 extends ProveedorActualizacionBase {
  tipo: 0;
}

interface ProveedorActualizacionTipo1 extends ProveedorActualizacionBase {
  tipo: 1;
  contenidoPregunta: string;
}

interface ProveedorActualizacionTipo2 extends ProveedorActualizacionBase {
  tipo: 2;
}

interface ProveedorActualizacionTipo3 extends ProveedorActualizacionBase {
  tipo: 3;
}