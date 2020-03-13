import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejemploCore';
  @ViewChild('inputNombre', {static: true}) inputNombre: ElementRef;

  mostrar()
  {
    console.log(this.inputNombre.nativeElement.value)
/*     this.inputNombre.nativeElement.style.background = "red" */
this.inputNombre.nativeElement.focus();

  }
}
