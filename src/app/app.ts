import { Component } from '@angular/core';
import { PrimerComponente } from './components/primer-componente/primer-componente';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PrimerComponente],
  template: `<app-primer-componente></app-primer-componente>`
})
export class AppComponent {}