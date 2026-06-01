import { Component } from '@angular/core';
import { SumarComponent } from './components/sumar/sumar.component'; // <-- Importamos tu componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SumarComponent], // <-- Lo agregamos aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Dejamos la clase limpia, ya no necesitamos el signal del título
}