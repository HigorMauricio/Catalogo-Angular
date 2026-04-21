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

  albums: Album[] = [
    {
      id: '5',
      title: 'Pray for Paris',
      artist: 'Westside Gunn',
      releaseYear: 2020,
      gender: 'Rap/Boom Bap',
      label: 'Griselda Records',
      coverUrl: 'covers/pray-for-paris-cover.jpg',
      audioUrl: 'music/le-djoliba.mp3',
      isClassic: true
    },
    {
      id: '4',
      title: 'Alfredo',
      artist: 'Freddie Gibbs & The Alchemist',
      releaseYear: 2020,
      gender: 'Rap/Boom Bap',
      label: 'ESGN Records',
      coverUrl: 'covers/alfredo-cover.png',
      audioUrl: 'music/look-at-me.mp3',
      isClassic: false
    },
    {
      id: '1',
      title: 'Clube da Esquina',
      artist: 'Milton Nascimento & Lô Borges',
      releaseYear: 1972,
      gender: 'MPB',
      label: 'Odeon Records',
      coverUrl: 'covers/clube-da-esquina-cover.jpg',
      audioUrl: 'music/um-girassol-da-cor-do-seu-cabelo.mp3',
      isClassic: true
    },
    {
      id: '2',
      title: 'MM..FOOD',
      artist: 'MF DOOM',
      releaseYear: 2004,
      gender: 'Rap/Boom Bap',
      label: 'Rhymesayers Entertainment',
      coverUrl: 'covers/mm-food-cover.jpg',
      audioUrl: 'music/deep-fried-frenz.mp3',
      isClassic: false
    },
    {
      id: '3',
      title: 'DeBÍ TiRAR MáS FOToS',
      artist: 'Bad Bunny',
      releaseYear: 2025,
      gender: 'Reggaeton',
      label: 'Rimas Entertainment',
      coverUrl: 'covers/debi-tirar-mas-fotos-cover.jpeg',
      audioUrl: 'covers/cafe-con-ron.mp3',
      isClassic: false
    },
    {
      id: '6',
      title: 'Castelos e Ruínas',
      artist: 'BK',
      releaseYear: 2016,
      gender: 'Rap',
      label: 'Pirâmide Perdida Records',
      coverUrl: 'covers/castelo-ruinas-cover.png',
      audioUrl: 'covers/amores-vicios-e-obsessoes.mp3',
      isClassic: false
    },
    {
      id: '7',
      title: 'Hurry Up Tomorrow',
      artist: 'The Weekend',
      releaseYear: 2025,
      gender: 'Pop',
      label: 'XO',
      coverUrl: 'covers/hurry-up-tomorrow-cover.jpeg',
      audioUrl: 'baptized-in-fear.mp3',
      isClassic: false
    }
  ]
}
