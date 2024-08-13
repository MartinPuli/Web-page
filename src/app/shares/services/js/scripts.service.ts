import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ScriptsService {

  constructor() { }

  public loadScript(archivos: string[]) {
    for (let archivo of archivos) {
      let script = document.createElement('script')
      script.src = '/assets/js/' + archivo + '.js'
      let body = document.getElementsByTagName('body')[0]
      body.appendChild(script)
    }
  }
}
