import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero'
import { AlbumGallery } from './components/album-gallery/album-gallery';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, AlbumGallery],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vinyl-catalog');
}
