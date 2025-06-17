import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesPage } from './favorites.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FavoritesPage', () => {
  let component: FavoritesPage;
  let fixture: ComponentFixture<FavoritesPage>;

  const routerMock = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FavoritesPage,             // <-- Importa o componente standalone aqui
        HttpClientTestingModule
      ],
      providers: [
        PokemonService,
        FavoriteService,
        { provide: Router, useValue: routerMock }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
