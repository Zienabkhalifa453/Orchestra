import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBackgroundComponent } from './hero-background.component';
import { HeroContentComponent } from './hero-content.component';
import { HeroSliderComponent } from './hero-slider.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, HeroBackgroundComponent, HeroContentComponent, HeroSliderComponent],
  template: `
    <section class="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <app-hero-background></app-hero-background>
      <app-hero-content></app-hero-content>
      <div class="mt-16">
        <app-hero-slider></app-hero-slider>
      </div>
    </section>
  `
})
export class HeroSectionComponent {}