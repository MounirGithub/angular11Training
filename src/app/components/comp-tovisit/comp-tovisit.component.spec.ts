import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTOVisitComponent } from './comp-tovisit.component';

describe('CompTOVisitComponent', () => {
  let component: CompTOVisitComponent;
  let fixture: ComponentFixture<CompTOVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompTOVisitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompTOVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
