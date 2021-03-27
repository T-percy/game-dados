import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoUno = "../assets/img/lado1.png"
  dadoDos = "../assets/img/lado4.png"

  numero1= 1;
  numero2= 4;

  lanzarDados(): void{
    this.numero1 = Math.round(Math.random() *5) + 1;
    this.numero2 = Math.round(Math.random() *5) + 1;

    this.dadoUno = '../assets/img/lado' + this.numero1 + '.png';
    this.dadoDos = '../assets/img/lado' + this.numero2 + '.png';
  }
}
