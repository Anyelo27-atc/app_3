import { Component, inject, signal } from '@angular/core';
import { Persona } from '../../interfaces/persona';
import { form, min, required, FormField, maxDate } from '@angular/forms/signals';
import { PrimerComponenteService } from '../../services/primer-componente.service';

@Component({
  imports: [FormField],
  selector: 'app-primer-componente',
  styleUrl: './primer-componente.css',
  templateUrl: './primer-componente.html',
})
export class PrimerComponente {

  private personaService = inject(PrimerComponenteService)
  listaPersonas: Persona[]=[]

  private personaModelo = signal<Persona>({
    nombre: '',
    edad: 0
  })

  personaFormulario = form(this.personaModelo, (esquema)=>{
    required(esquema.nombre, {message: 'Nombre obligatirio'})
    min(esquema.edad, 18,  {message: 'Debes tener más de 18 años'})
  })

  constructor(){
    this.montrarpersonas()
  }

  guardarPersona(evento: Event){
    evento.preventDefault()
    let persona = {
      'nombre': this.personaModelo().nombre,
      'edad': this.personaModelo().edad,
    }
    this.personaService.guardar(persona)
    console.log(persona) 
    this.limpiar()
  }
  montrarpersonas(){
    this.listaPersonas = this.personaService.mostrar()
  }

  limpiar(){
    this.personaModelo.set({
      nombre:'',
      edad: 0
    })
  }
}
