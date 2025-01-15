import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-[60vh] flex items-center pt-24 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#2AB24B]/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1f2251]/10 rounded-full blur-3xl"></div>
        <div class="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl">
          <h1 class="hero-title mb-6">
            <span class="block text-4xl md:text-6xl font-bold text-[#1f2251] leading-tight">
              Innovating the Future
            </span>
            <span class="block text-4xl md:text-6xl font-bold text-[#2AB24B] leading-tight">
              of Technology
            </span>
          </h1>
          
          <p class="hero-text text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
            Since our founding, we've been at the forefront of digital transformation, 
            helping businesses navigate the ever-evolving technology landscape with 
            innovative solutions and unparalleled expertise.
          </p>

          <div class="hero-stats grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="stat-item p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
              <div class="text-2xl font-bold text-[#2AB24B]">2008</div>
              <div class="text-sm text-gray-600">Founded</div>
            </div>
            <div class="stat-item p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
              <div class="text-2xl font-bold text-[#2AB24B]">500+</div>
              <div class="text-sm text-gray-600">Team Members</div>
            </div>
            <div class="stat-item p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
              <div class="text-2xl font-bold text-[#2AB24B]">15+</div>
              <div class="text-sm text-gray-600">Global Offices</div>
            </div>
            <div class="stat-item p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
              <div class="text-2xl font-bold text-[#2AB24B]">1000+</div>
              <div class="text-sm text-gray-600">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-grid-pattern {
      background-image: 
        linear-gradient(rgba(31, 34, 81, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(31, 34, 81, 0.2) 1px, transparent 1px);
      background-size: 50px 50px;
    }

    .hero-title {
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .hero-text {
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
    }

    .stat-item {
      animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;

      &:nth-child(1) { animation-delay: 0.3s; }
      &:nth-child(2) { animation-delay: 0.4s; }
      &:nth-child(3) { animation-delay: 0.5s; }
      &:nth-child(4) { animation-delay: 0.6s; }
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }
  `]
})
export class AboutHeroComponent {}