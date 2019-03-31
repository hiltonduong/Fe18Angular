import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2SliderComponent } from './bt2-slider.component';

describe('Bt2SliderComponent', () => {
  let component: Bt2SliderComponent;
  let fixture: ComponentFixture<Bt2SliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2SliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
