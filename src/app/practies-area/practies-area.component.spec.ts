import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiesAreaComponent } from './practies-area.component';

describe('PractiesAreaComponent', () => {
  let component: PractiesAreaComponent;
  let fixture: ComponentFixture<PractiesAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractiesAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PractiesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
