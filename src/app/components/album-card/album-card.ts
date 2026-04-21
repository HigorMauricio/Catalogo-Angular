import { Component, Input, inject } from '@angular/core';
import { Album } from '../../models/album';
import { AudioService } from '../../services/audioService';

@Component({
  selector: 'app-album-card',
  imports: [],
  templateUrl: './album-card.html',
  styleUrl: './album-card.css',
})
export class AlbumCard {
  @Input({required: true }) album!: Album;

  audioService = inject(AudioService);

  isFlipped = false;

  virarCartao() : void {
    this.isFlipped = !this.isFlipped;
  }

  toggleClassico() : void {
    this.album.isClassic = !this.album.isClassic
  }
  
  playSong() : void {
    if(!this.album.audioUrl) return;
    
    this.audioService.toggleAudio(this.album.id, this.album.audioUrl);
  }
}
