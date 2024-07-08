import { Injectable } from '@angular/core';
import { User } from '../models/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios: User[] = [
    {
      id: 1,
      name: "Carlos Pérez",
      email: "carlosperez@example.com",
      cuit: "20876543210",
      phone: "+541123456789",
      tipo: "vendedor",
      img: 'https://static.vecteezy.com/system/resources/thumbnails/036/627/416/small_2x/ai-generated-branch-with-colorful-blooming-flowers-isolated-on-transparent-background-png.png',
      additionalData: {
        username: "CarlosP",
        password: "******",
        address: "Avenida Siempre Viva 742",
        recoveryEmail: "carlos.recovery@example.com",
      },
      security: {
        twoStepVerification: false,
        trustedUsers: true,
      }
    },
    {
      id: 2,
      name: "Juanita Cotillón",
      email: "juanitacotillon@hotmail.com",
      cuit: "30716681382",
      phone: "+541150201196",
      tipo: "proveedor",
      img: 'https://static.vecteezy.com/system/resources/thumbnails/036/627/416/small_2x/ai-generated-branch-with-colorful-blooming-flowers-isolated-on-transparent-background-png.png',
      additionalData: {
        username: "Juanita",
        password: "******",
        address: "Calle Falsa 123",
        recoveryEmail: "juanita.recovery@example.com",
      },
      security: {
        twoStepVerification: true,
        trustedUsers: false,
      },
    }
  ]

  constructor() { }

  getUsuarios(): User[] {
    return this.usuarios
  }

  getUsuario(id: number): User | null{
    let usuarioEncontrado = null
    this.usuarios.forEach((usuario) => {
      if (usuario.id == id) usuarioEncontrado = usuario
    })
    return usuarioEncontrado
  }
}
