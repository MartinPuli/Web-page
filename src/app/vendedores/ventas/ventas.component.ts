import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ActualizacionesService } from '../../shares/services/actualizaciones.service';
import { ApiProductosService } from '../../shares/services/api-productos.service';
import { PreguntasService } from '../../shares/services/preguntas.service';
import { ActualizacionCompleta, isVendedorActualizacionTipo0, isProveedorActualizacionTipo0} from '../../shares/models/actualizacion-model';
import { IProduct } from '../../shares/models/producto-model';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterOutlet],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.scss'
})
export class VentasComponent {
    
}
