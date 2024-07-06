import { Component } from '@angular/core';
import { logros } from './logros-data.';
import { Logros } from '../../models/logros-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logros.component.html',
  styleUrl: './logros.component.scss'
})
export class LogrosComponent {
  logrosObtenidos:Logros[] = logros
}
