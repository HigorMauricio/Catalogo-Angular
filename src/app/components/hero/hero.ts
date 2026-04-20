import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  rolar() {
    const elemento = document.getElementById('colecao');
    if(elemento){
      elemento.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
}
