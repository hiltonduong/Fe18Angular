import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt3ContentsComponent } from './bt3-contents.component';

describe('Bt3ContentsComponent', () => {
  let component: Bt3ContentsComponent;
  let fixture: ComponentFixture<Bt3ContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt3ContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt3ContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
