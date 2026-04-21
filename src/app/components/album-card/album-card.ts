import { Component, Input } from '@angular/core';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-card',
  imports: [],
  templateUrl: './album-card.html',
  styleUrl: './album-card.css',
})
export class AlbumCard {
  @Input({required: true }) album!: Album;

  isFlipped = false;
  isPlaying = false;

  virarCartao() {
    this.isFlipped = !this.isFlipped;
  }

  toggleClassico() {
    this.album.isClassic = !this.album.isClassic
  }

  playSong() {
    this.isPlaying = !this.isPlaying;
  }
  
}
