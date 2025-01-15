import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconModule } from '../icons/icon.module';
import { iconStyles } from '../../styles/icon.styles';

@Component({
  selector: 'app-hero-content',
  standalone: true,
  imports: [CommonModule, RouterLink, IconModule],
  template: `
    <div class="relative z-10 max-w-4xl mx-auto text-center">
      <h1 class="hero-title mb-6">
        <span class="block text-[#1f2251] text-5xl md:text-7xl font-bold leading-tight">
          Orchestrate Your
        </span>
        <span class="block text-[#2AB24B] text-5xl md:text-7xl font-bold leading-tight">
          Digital Success
        </span>
      </h1>

      <p class="hero-text text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Transform your business with cutting-edge technology solutions that drive innovation and growth.
      </p>

      <div class="hero-buttons flex flex-wrap justify-center gap-6">
        <a routerLink="/products" 
           class="btn-primary group flex items-center gap-2 px-8 py-4">
          Explore Solutions
          <lucide-icon 
            name="arrow-right" 
            [size]="iconStyles.size.md"
            class="transform transition-transform group-hover:translate-x-1">
          </lucide-icon>
        </a>
        
        <a routerLink="/contact" 
           class="btn-accent group flex items-center gap-2 px-8 py-4">
          Get Started
          <lucide-icon 
            name="chevron-right" 
            [size]="iconStyles.size.md"
            class="transform transition-transform group-hover:translate-x-1">
          </lucide-icon>
        </a>
      </div>

      <div class="hero-stats grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
        <div class="stat-item">
          <div class="text-3xl font-bold text-[#2AB24B] mb-2">10+</div>
          <div class="text-gray-600">Years Experience</div>
        </div>
        <div class="stat-item">
          <div class="text-3xl font-bold text-[#2AB24B] mb-2">500+</div>
          <div class="text-gray-600">Projects Delivered</div>
        </div>
        <div class="stat-item">
          <div class="text-3xl font-bold text-[#2AB24B] mb-2">100+</div>
          <div class="text-gray-600">Expert Team</div>
        </div>
        <div class="stat-item">
          <div class="text-3xl font-bold text-[#2AB24B] mb-2">50+</div>
          <div class="text-gray-600">Global Clients</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero-title {
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .hero-text {
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
    }

    .hero-buttons {
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
    }

    .stat-item {
      @apply p-6 rounded-2xl bg-white/50 backdrop-blur-sm
             border border-gray-100 shadow-lg shadow-gray-100/20
             hover:shadow-xl hover:shadow-gray-100/30
             hover:border-[#2AB24B]/20 transition-all duration-300
             transform hover:-translate-y-1;
      animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;

      &:nth-child(1) { animation-delay: 0.6s; }
      &:nth-child(2) { animation-delay: 0.7s; }
      &:nth-child(3) { animation-delay: 0.8s; }
      &:nth-child(4) { animation-delay: 0.9s; }
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

    @keyframes fadeIn {
      from { 
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  `]
})
export class HeroContentComponent {
  iconStyles = iconStyles;
}