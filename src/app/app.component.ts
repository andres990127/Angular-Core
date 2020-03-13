import { Component, ViewChild, ElementRef } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejemploCore';
  @ViewChild('inputNombre', {static: true}) inputNombre: ElementRef;
  @ViewChild(HijoComponent, {static: true}) hijo: HijoComponent;
  mostrar() {
   /*  console.log(this.inputNombre.nativeElement.value)
         this.inputNombre.nativeElement.style.background = "red" 
    this.inputNombre.nativeElement.focus(); */
    this.hijo.titulo = "lo modifique desde un padre"
  }
}
