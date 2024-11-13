import {Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SectionComponent } from './section/section.component';
import { SimpleSliderComponent } from './simple-slider/simple-slider.component';
import { Section2Component } from './section2/section2.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
export const routes: Routes = [
   {path:'contact-us', component:ContactUsComponent},
   {path:'header', component:HeaderComponent},
   {path:'banner', component:BannerComponent},
   {path:'features', component:FeaturesComponent},
   {path:'testimonials', component:TestimonialsComponent},
   {path:'section', component:SectionComponent},
   {path:'simpleslider', component:SimpleSliderComponent},
   {path:'section2', component:Section2Component},
   {path:'slider', component:SliderComponent},
   {path:'footer', component:FooterComponent},
   { path: '', redirectTo: '/contact-us', pathMatch: 'full' },
];
