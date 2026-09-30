import { Injectable, signal, computed } from '@angular/core';
import { Producto, Resena } from '../interfaces/Persona';

@Injectable({
  providedIn: 'root'
})
export class PrimerComponenteService {

  productos = signal<Producto[]>([
    { id: 1, nombre: 'Smartphone Tecno Pro 12', precio: 899, categoria: 'Celulares', imagen: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300', oferta: true, descuento: 15 },
    { id: 2, nombre: 'Laptop UltraBook X', precio: 1299, categoria: 'Laptops', imagen: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300', oferta: false },
    { id: 3, nombre: 'Audífonos Bluetooth', precio: 199, categoria: 'Accesorios', imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300', oferta: true, descuento: 20 },
    { id: 4, nombre: 'Smartwatch Sport V2', precio: 149, categoria: 'Dispositivos Inteligentes', imagen: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300', oferta: false }
  ]);


  resenas = signal<Resena[]>([
    { cliente: 'Carlos M.', comentario: 'Excelente calidad y envío rápido.', puntuacion: 5, productoNombre: 'Smartphone Tecno Pro 12' }
  ]);


  alertaMensaje = signal<string | null>(null);


  ofertas = computed(() => this.productos().filter(p => p.oferta));

io
  agregarResena(nuevaResena: Resena) {
    this.resenas.update(lista => [...lista, nuevaResena]);
    this.mostrarAlerta('¡Reseña registrada con éxito!');
  }

  mostrarAlerta(msj: string) {
    this.alertaMensaje.set(msj);
    setTimeout(() => this.alertaMensaje.set(null), 3500);
  }
}