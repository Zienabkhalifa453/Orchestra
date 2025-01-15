import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div class="absolute inset-0 overflow-hidden">
        <div class="hero-shape-1"></div>
        <div class="hero-shape-2"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl">
          <h1 class="hero-title text-6xl md:text-7xl font-bold text-[#1f2251] mb-6 leading-tight">
            Orchestrate Your <span class="text-[#2AB24B]">Digital Success</span>
          </h1>
          <p class="hero-text text-xl text-gray-600 mb-8 leading-relaxed">
            Transform your business with cutting-edge technology solutions that drive innovation and growth.
          </p>
          <div class="hero-buttons flex flex-wrap gap-4">
            <a routerLink="/products" class="btn-primary inline-flex items-center gap-2">
              Explore Solutions
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a routerLink="/contact" class="btn-accent inline-flex items-center gap-2">
              Get Started
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroSectionComponent {}