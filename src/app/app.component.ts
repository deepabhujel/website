import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SectionComponent } from './section/section.component';
import { SimpleSliderComponent } from './simple-slider/simple-slider.component';
import { Section2Component } from './section2/section2.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,ContactUsComponent,HeaderComponent,BannerComponent,TestimonialsComponent,SectionComponent,SimpleSliderComponent,Section2Component,SliderComponent,FooterComponent, RouterModule, SlickCarouselModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}
