import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../shared/components/hero-section.component';
import { FeaturesSectionComponent } from '../../shared/components/features/features-section.component';
import { FoundersSectionComponent } from '../../shared/components/founders/founders-section.component';
import { ModernStatsComponent } from '../../shared/components/stats/modern-stats.component';
import { TestimonialsSectionComponent } from '../../shared/components/testimonials/testimonials-section.component';
import { CTASectionComponent } from '../../shared/components/cta-section.component';
import { fadeInFromTop, fadeInFromSide, staggerCards } from '../../shared/animations/fade.animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    FeaturesSectionComponent,
    FoundersSectionComponent,
    ModernStatsComponent,
    TestimonialsSectionComponent,
    CTASectionComponent
  ],
  template: `
    <div class="min-h-screen">
      <app-hero-section></app-hero-section>
      <app-features-section></app-features-section>
      <app-founders-section></app-founders-section>
      <app-modern-stats></app-modern-stats>
      <app-testimonials-section></app-testimonials-section>
      <app-cta-section></app-cta-section>
    </div>
  `
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    fadeInFromTop('.hero-title', 0.2);
    fadeInFromTop('.hero-text', 0.4);
    fadeInFromTop('.hero-buttons', 0.6);
    fadeInFromTop('.cta-title', 0.2);
    fadeInFromTop('.cta-text', 0.4);
  }
}