import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoundersSliderComponent } from './founders-slider.component';

@Component({
  selector: 'app-founders-section',
  standalone: true,
  imports: [CommonModule, FoundersSliderComponent],
  template: `
    <section class="founders-section">
      <div class="container mx-auto px-4 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="section-title">Meet Our Founders</h2>
          <p class="section-subtitle">
            Visionary leaders driving innovation and excellence
          </p>
        </div>

        <!-- Founders Slider -->
        <app-founders-slider></app-founders-slider>
      </div>

      <!-- Background Elements -->
      <div class="background-elements">
        <div class="gradient-orb gradient-orb-1"></div>
        <div class="gradient-orb gradient-orb-2"></div>
        <div class="grid-pattern"></div>
      </div>
    </section>
  `,
  styles: [`
    .founders-section {
      @apply relative py-20 bg-gray-50 overflow-hidden;
    }

    .section-title {
      @apply text-3xl md:text-4xl font-bold text-[#1f2251] mb-4;
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .section-subtitle {
      @apply text-lg text-gray-600 max-w-2xl mx-auto;
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
    }

    .background-elements {
      @apply absolute inset-0 pointer-events-none;
    }

    .gradient-orb {
      @apply absolute rounded-full opacity-30 blur-3xl;
    }

    .gradient-orb-1 {
      @apply w-96 h-96 bg-[#2AB24B]/20 -top-48 -right-48;
    }

    .gradient-orb-2 {
      @apply w-96 h-96 bg-[#1f2251]/20 -bottom-48 -left-48;
    }

    .grid-pattern {
      @apply absolute inset-0 opacity-[0.015];
      background-image: 
        linear-gradient(rgba(31, 34, 81, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(31, 34, 81, 0.2) 1px, transparent 1px);
      background-size: 50px 50px;
    }

    @keyframes slideUp {
      from { 
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class FoundersSectionComponent {}