import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogrosComponent } from './general/logros/logros.component';
import { HomeComponent } from './vendedores/home/home.component';
import { FooterComponent } from './general/footer/footer.component';
import { PanelGananciasComponent } from './general/panel-ganancias/panel-ganancias.component';
import { HeaderComponent } from './general/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogrosComponent, HomeComponent, FooterComponent, PanelGananciasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web-page';
}
