import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2CotentsComponent } from './bt2-cotents.component';

describe('Bt2CotentsComponent', () => {
  let component: Bt2CotentsComponent;
  let fixture: ComponentFixture<Bt2CotentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2CotentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2CotentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
