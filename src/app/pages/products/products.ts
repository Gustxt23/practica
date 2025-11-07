import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // <- importar CommonModule

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  standalone: true,            // ⚠️ necesario si es componente independiente
  imports: [CommonModule]      // <- aquí va
})
export class Products {}
