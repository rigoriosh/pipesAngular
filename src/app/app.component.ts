import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Capitan America';
  nombre2 = 'rIgoBerTo riOs hUesO';
  myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  myPorcentaje = 0.234;
  salario = 1234.5;
  hero = {
    nombre: 'logan',
    clave: 'wolwerin',
    edad: 500,
    direction: {
      calle: 'primera',
      casa: 20
    }
  };

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  fecha: Date = new Date();
  idioma = 'es';
  videoUrl = 'https://www.youtube.com/embed/eMcxNcQcAgI';
  activado = true;
}
