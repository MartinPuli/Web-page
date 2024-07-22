import { Routes } from '@angular/router';
import { HomeComponent } from './vendedores/home/home.component';
import { DetalleProductoComponent } from './vendedores/detalle-producto/detalle-producto.component';
import { HomeProveedorComponent } from './proveedores/home-proveedor/home-proveedor.component';
import { CuentaComponent } from './general/cuenta/cuenta.component';
import { ActualizacionesComponent } from './general/actualizaciones/actualizaciones.component';
import { VentasComponent } from './general/ventas/ventas.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "proveedor/:idUsuario", component: HomeProveedorComponent},
    {path: "products/:productId", component: DetalleProductoComponent },
    {path: ':tipo/cuenta/:idUsuario', component: CuentaComponent},
    {path: ':tipo/actualizaciones/:idUsuario', component: ActualizacionesComponent},
    {path: ':tipo/ventas/:idUsuario', component: VentasComponent},
    {path: "vendedor/:idvendedor", component: HomeComponent},
    {path: "vendedor/:idvendedor/products/:productId", component: DetalleProductoComponent },
    {path: '**', redirectTo: '', pathMatch: 'full'}
  ];
