import { Component } from '@angular/core';
import { Album } from '../../models/album';
import { AlbumCard } from '../album-card/album-card';

@Component({
  selector: 'app-album-gallery',
  imports: [AlbumCard],
  templateUrl: './album-gallery.html',
  styleUrl: './album-gallery.css',
})
export class AlbumGallery {

}
