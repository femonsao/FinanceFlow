import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquaredIconComponent } from './squared-icon.component';

describe('SquaredIconComponent', () => {
  let component: SquaredIconComponent;
  let fixture: ComponentFixture<SquaredIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquaredIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SquaredIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
