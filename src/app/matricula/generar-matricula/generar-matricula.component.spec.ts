import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarMatriculaComponent } from './generar-matricula.component';

describe('GenerarMatriculaComponent', () => {
  let component: GenerarMatriculaComponent;
  let fixture: ComponentFixture<GenerarMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarMatriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
