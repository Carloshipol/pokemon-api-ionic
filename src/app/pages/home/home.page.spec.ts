import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonService } from 'src/app/services/pokemon.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomePage,                 // ⬅️ Standalone component aqui
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [PokemonService]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
