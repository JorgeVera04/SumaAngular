import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SumarService } from '../../services/sumar.service';

@Component({
  selector: 'app-sumar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sumar.component.html',
  styles: [`
    .box-container { max-width: 300px; margin: 50px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; font-family: sans-serif; }
    .group { margin-bottom: 15px; }
    .group label { display: block; margin-bottom: 5px; font-weight: bold; }
    .group input { width: 100%; padding: 8px; box-sizing: border-box; }
    .box-resultado { margin-top: 20px; padding: 10px; background-color: #e6f7ff; border: 1px solid #91d5ff; border-radius: 4px; text-align: center; }
  `]
})
export class SumarComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number | null = null;

  constructor(private sumarService: SumarService) {}

  onInput(): void {
    this.resultado = this.sumarService.calcular(this.num1, this.num2);
  }
}