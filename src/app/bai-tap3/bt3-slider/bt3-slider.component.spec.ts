import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt3SliderComponent } from './bt3-slider.component';

describe('Bt3SliderComponent', () => {
  let component: Bt3SliderComponent;
  let fixture: ComponentFixture<Bt3SliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt3SliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt3SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
