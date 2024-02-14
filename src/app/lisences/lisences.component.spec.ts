import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisencesComponent } from './lisences.component';

describe('LisencesComponent', () => {
  let component: LisencesComponent;
  let fixture: ComponentFixture<LisencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LisencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
