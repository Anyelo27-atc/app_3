// Mantenemos la interfaz Persona por si la utilizas en otro lugar
export interface Persona {
    nombre: string;
    edad: number;
  }
  
  // Interfaz para los productos de TecnoMax
  export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    categoria: 'Celulares' | 'Laptops' | 'Accesorios' | 'Dispositivos Inteligentes';
    imagen: string;
    oferta: boolean;
    descuento?: number;
  }
  
  // Interfaz para las reseñas y valoraciones del formulario
  export interface Resena {
    cliente: string;
    comentario: string;
    puntuacion: number;
    productoNombre: string;
  }