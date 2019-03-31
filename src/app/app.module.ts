import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaiTap1Component } from './bai-tap1/bai-tap1.component';
import { Bt1HeaderComponent } from './bai-tap1/bt1-header/bt1-header.component';
import { Bt1ContentComponent } from './bai-tap1/bt1-content/bt1-content.component';
import { Bt1SidebarComponent } from './bai-tap1/bt1-sidebar/bt1-sidebar.component';
import { Bt1FooterComponent } from './bai-tap1/bt1-footer/bt1-footer.component';
import { BaiTap2Component } from './bai-tap2/bai-tap2.component';
import { Bt2HeaderComponent } from './bai-tap2/bt2-header/bt2-header.component';
import { Bt2SliderComponent } from './bai-tap2/bt2-slider/bt2-slider.component';
import { Bt2CotentsComponent } from './bai-tap2/bt2-cotents/bt2-cotents.component';
import { Bt2WhatWeDoComponent } from './bai-tap2/bt2-what-we-do/bt2-what-we-do.component';
import { Bt2ContactComponent } from './bai-tap2/bt2-contact/bt2-contact.component';
import { Bt2ItemComponent } from './bai-tap2/bt2-item/bt2-item.component';
import { Bt2FooterComponent } from './bai-tap2/bt2-footer/bt2-footer.component';
import { BaiTap3Module } from "./bai-tap3/bai-tap3.module";


@NgModule({
  declarations: [
    AppComponent,
    BaiTap1Component,
    Bt1HeaderComponent,
    Bt1ContentComponent,
    Bt1SidebarComponent,
    Bt1FooterComponent,
    BaiTap2Component,
    Bt2HeaderComponent,
    Bt2SliderComponent,
    Bt2CotentsComponent,
    Bt2WhatWeDoComponent,
    Bt2ContactComponent,
    Bt2ItemComponent,
    Bt2FooterComponent
  ],
  imports: [
    BrowserModule,
    BaiTap3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
