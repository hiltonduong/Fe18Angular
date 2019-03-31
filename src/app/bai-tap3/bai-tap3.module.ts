import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTap3Component } from './bai-tap3.component';
import { Bt3HeaderComponent } from './bt3-header/bt3-header.component';
import { Bt3SliderComponent } from './bt3-slider/bt3-slider.component';
import { Bt3ContentsComponent } from './bt3-contents/bt3-contents.component';

@NgModule({
  declarations: [BaiTap3Component, Bt3HeaderComponent, Bt3SliderComponent, Bt3ContentsComponent],
  exports:  [BaiTap3Component, Bt3HeaderComponent, Bt3SliderComponent, Bt3ContentsComponent],
  imports: [
    CommonModule
  ]
})
export class BaiTap3Module { }
