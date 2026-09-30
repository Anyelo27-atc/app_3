import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrimerComponenteService } from '../../services/primer-componente.service';
import { Resena } from '../../interfaces/Persona';

@Component({
  selector: 'app-primer-componente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './primer-componente.html',
  styleUrl: './primer-componente.css'
})
export class PrimerComponente {
  service = inject(PrimerComponenteService);

  categoriaSeleccionada = signal<string>('Todas');

  nombreCliente = '';
  comentarioCliente = '';
  puntuacion = 5;
  productoSeleccionado = 'Smartphone Tecno Pro 12';

  get productosFiltrados() {
    const cat = this.categoriaSeleccionada();
    if (cat === 'Todas') return this.service.productos();
    return this.service.productos().filter(p => p.categoria === cat);
  }

  filtrar(categoria: string) {
    this.categoriaSeleccionada.set(categoria);
  }

  guardarResena() {
    if (!this.nombreCliente.trim() || !this.comentarioCliente.trim()) return;

    const nueva: Resena = {
      cliente: this.nombreCliente,
      comentario: this.comentarioCliente,
      puntuacion: Number(this.puntuacion),
      productoNombre: this.productoSeleccionado
    };

    this.service.agregarResena(nueva);

    this.nombreCliente = '';
    this.comentarioCliente = '';
    this.puntuacion = 5;
  }
}