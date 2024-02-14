import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiesSingleComponent } from './practies-single.component';

describe('PractiesSingleComponent', () => {
  let component: PractiesSingleComponent;
  let fixture: ComponentFixture<PractiesSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractiesSingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PractiesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
