import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {

  private audioPlayer = new Audio();

  private currentAlbumId : string | null = null;
  private isPlaying: boolean = false;

  constructor() {
    this.audioPlayer.onended = () => {
      this.isPlaying = false;
    } 
  }

  isAlbumPlaying(albumId: string) : boolean {
    return this.currentAlbumId === albumId && this.isPlaying;
  }

  toggleAudio(albumId: string, url:string) : void{
    if(this.currentAlbumId === albumId && this.isPlaying){
      this.audioPlayer.pause();
      this.isPlaying = false;
      return
    }
    if(this.currentAlbumId === albumId && !this.isPlaying){
      this.audioPlayer.play();
      this.isPlaying = true;
      return
    }

    this.audioPlayer.pause();
    this.currentAlbumId = albumId;
    this.audioPlayer.src = url;
    this.audioPlayer.load();
    this.audioPlayer.play();
    this.isPlaying = true;
  } 
}
