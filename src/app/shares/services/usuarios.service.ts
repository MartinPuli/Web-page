import { Injectable } from '@angular/core';
import { Proveedor, Vendedor } from '../../shares/models/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private vendedores: Vendedor[] = [
    {
      id: 1,
      name: "Carlos Pérez",
      email: "carlosperez@example.com",
      cuit: "20876543210",
      phone: "+541123456789",
      img: 'https://static.vecteezy.com/system/resources/thumbnails/036/627/416/small_2x/ai-generated-branch-with-colorful-blooming-flowers-isolated-on-transparent-background-png.png',

      username: "CarlosP",
      address: "Avenida Siempre Viva 742",
      recoveryEmail: "carlos.recovery@example.com",

      twoStepVerification: false,
      trustedUsers: true,
    },
    {
      id: 2,
      name: "Juanita Cotillón",
      email: "juanitacotillon@hotmail.com",
      cuit: "30716681382",
      phone: "+541150201196",
      img: 'https://static.vecteezy.com/system/resources/thumbnails/036/627/416/small_2x/ai-generated-branch-with-colorful-blooming-flowers-isolated-on-transparent-background-png.png',
      username: "Juanita",
      address: "Calle Falsa 123",
      recoveryEmail: "juanita.recovery@example.com",
      twoStepVerification: true,
      trustedUsers: false,
    }
  ]

  private proveedores: Proveedor[] = [
    {
      id: 1,
      brandName: "Tazas.srl",
      email: "tazas@tazas.com",
      cuit: "30376543413",
      phone: "+541132134234",
      img: 'https://static.vecteezy.com/system/resources/thumbnails/036/627/416/small_2x/ai-generated-branch-with-colorful-blooming-flowers-isolated-on-transparent-background-png.png',
      username: "tazitas",
      address: "noc 3232",
      recoveryEmail: "tazas.recovery@example.com",
      twoStepVerification: false,
      trustedUsers: true,
    },
    {
      id: 2,
      brandName: "buzos over",
      email: "buzosover@hotmail.com",
      cuit: "30716681383",
      phone: "+541142332342",
      img: 'https://static.vecteezy.com/system/resources/thumbnails/036/627/416/small_2x/ai-generated-branch-with-colorful-blooming-flowers-isolated-on-transparent-background-png.png',
      username: "buzos23",
      address: "Calle Falsa 113",
      recoveryEmail: "buzos.recovery@example.com",
      twoStepVerification: true,
      trustedUsers: true,
    }
  ]

  constructor() { }

  getVendedores():Vendedor[]{
    return this.vendedores
  }

  getProveedores(): Proveedor[]{
    return this.proveedores
  }

  getVendedor(id: number): Vendedor | null{
    let usuarioEncontrado = null
    this.vendedores.forEach((usuario) => {
      if (usuario.id == id) usuarioEncontrado = usuario
    })
    return usuarioEncontrado
  }

  getProveedor(id: number): Proveedor | null{
    let usuarioEncontrado = null
    this.proveedores.forEach((usuario) => {
      if (usuario.id == id) usuarioEncontrado = usuario
    })
    return usuarioEncontrado
  }
}
