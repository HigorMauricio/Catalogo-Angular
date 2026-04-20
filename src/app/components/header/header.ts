import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {
  rolar(idSecao: string) {
    const elemento = document.getElementById(idSecao);
    if(elemento){
      elemento.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
}