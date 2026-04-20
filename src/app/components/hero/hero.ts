import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  rolar(idSecao: string) {
    const elemento = document.getElementById(idSecao);
    if(elemento){
      elemento.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
}
