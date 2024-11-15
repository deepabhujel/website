import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSliderComponent } from './simple-slider.component';

describe('SimpleSliderComponent', () => {
  let component: SimpleSliderComponent;
  let fixture: ComponentFixture<SimpleSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
