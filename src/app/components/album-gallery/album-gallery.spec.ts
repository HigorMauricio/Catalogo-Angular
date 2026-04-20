import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumGallery } from './album-gallery';

describe('AlbumGallery', () => {
  let component: AlbumGallery;
  let fixture: ComponentFixture<AlbumGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumGallery],
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumGallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
