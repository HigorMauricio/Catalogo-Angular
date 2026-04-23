import { Component, OnInit, signal } from '@angular/core';
import { Album } from '../../models/album';
import { AlbumCard } from '../album-card/album-card';
import { AlbumService } from '../../services/album-service';

@Component({
  selector: 'app-album-gallery',
  imports: [AlbumCard],
  templateUrl: './album-gallery.html',
  styleUrl: './album-gallery.css',
})
export class AlbumGallery implements OnInit {
  albums = signal<Album[]>([]);

  constructor(private album_service: AlbumService) {}

  ngOnInit(): void {
    this.album_service.getAlbums().subscribe({
      next: (data) => this.albums.set(data),
      error: (err) => console.error('Erro ao carregar álbuns', err)
    })
  }
}
