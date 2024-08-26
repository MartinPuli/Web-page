import { Component, Input } from '@angular/core';

@Component({
  selector: 'estrellas',
  standalone: true,
  imports: [],
  templateUrl: './estrellas.component.html',
  styleUrl: './estrellas.component.scss'
})
export class EstrellasComponent {
  @Input() rating!: number
  @Input() nulo: Boolean = false;

  stringRate!: string

  ngOnInit(): void {
    this.stringRate = `${this.rating * 10}%`
  }
}
