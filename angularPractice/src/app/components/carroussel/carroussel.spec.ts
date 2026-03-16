import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carroussel } from './carroussel';

describe('Carroussel', () => {
  let component: Carroussel;
  let fixture: ComponentFixture<Carroussel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Carroussel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carroussel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
