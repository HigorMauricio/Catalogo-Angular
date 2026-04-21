import { Component } from '@angular/core';
import { Slide } from '../../models/slide';

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

  slides: Slide[] = [
    {
      image: 'background/tasha-tracie-background.jpg'
    },
    {
      image: 'background/kendrick-background.jpg'
    },
    {
      image: 'background/djavan-background.jpg'
    }
  ]

  slideAtual = 0;

  proximoSlide(): void {
    if(this.slideAtual === this.slides.length -1){
      this.slideAtual = 0;
    }else{
      this.slideAtual++;
    }
  }

  slideAnterior(): void {
    if(this.slideAtual === 0){
      this.slideAtual = this.slides.length -1;
    }else{
      this.slideAtual--;
    }
  }
}
