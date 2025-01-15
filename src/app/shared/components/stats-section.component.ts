import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-[#1f2251]">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="stat-item text-center">
            <div class="text-4xl font-bold text-[#2AB24B] mb-2">10+</div>
            <div class="text-white opacity-90">Years Experience</div>
          </div>
          <div class="stat-item text-center">
            <div class="text-4xl font-bold text-[#2AB24B] mb-2">500+</div>
            <div class="text-white opacity-90">Projects Delivered</div>
          </div>
          <div class="stat-item text-center">
            <div class="text-4xl font-bold text-[#2AB24B] mb-2">100+</div>
            <div class="text-white opacity-90">Expert Team</div>
          </div>
          <div class="stat-item text-center">
            <div class="text-4xl font-bold text-[#2AB24B] mb-2">50+</div>
            <div class="text-white opacity-90">Global Clients</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class StatsSectionComponent {}