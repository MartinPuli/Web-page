import { Routes } from '@angular/router';
import { HomeComponent } from './vendedores/home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { DetalleProductoComponent } from './vendedores/detalle-producto/detalle-producto.component';
import { HomeProveedorComponent } from './proveedores/home-proveedor/home-proveedor.component';
import { VentasProcesoComponent } from './proveedores/ventas-proceso/ventas-proceso.component';
import { CuentaComponent } from './general/cuenta/cuenta.component';
import { VentasComponent } from './vendedores/ventas/ventas.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "proveedor", component: HomeProveedorComponent},
    {path: "proveedor/ventas", component: VentasProcesoComponent},
    {path: "products", component: ProductosComponent},
    {path: "products/:productId", component: DetalleProductoComponent },
    {path: ':tipo/cuenta', component: CuentaComponent},
    {path: 'vendedor/ventas', component: VentasComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
  ];
