import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsPage } from './details.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailsPage', () => {
  let component: DetailsPage;
  let fixture: ComponentFixture<DetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DetailsPage,                // ⬅️ Standalone component
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        PokemonService,
        FavoriteService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => 'pikachu' } }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
