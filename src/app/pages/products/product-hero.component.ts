import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../shared/components/icons/icon.module';
import { iconStyles } from '../../shared/styles/icon.styles';

@Component({
  selector: 'app-product-hero',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <section class="relative pt-32 pb-20 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        <div class="absolute inset-0">
          <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#2AB24B]/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1f2251]/10 rounded-full blur-3xl"></div>
        </div>
        <div class="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>
      </div>

      <div class="container mx-auto px-4 relative">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="hero-title mb-6">
            <span class="block text-4xl md:text-6xl font-bold text-[#1f2251] leading-tight">
              Innovative Solutions for
            </span>
            <span class="block text-4xl md:text-6xl font-bold text-[#2AB24B] leading-tight">
              Modern Businesses
            </span>
          </h1>
          
          <p class="hero-text text-xl text-gray-600 mb-12">
            Discover our comprehensive suite of enterprise solutions designed to transform your business operations.
          </p>

          <div class="flex flex-wrap justify-center gap-6">
            <button class="hero-button group px-8 py-4 bg-[#1f2251] text-white rounded-xl
                         hover:bg-[#1f2251]/90 transition-all duration-300
                         flex items-center gap-2">
              View Solutions
              <lucide-icon 
                name="arrow-right" 
                [size]="iconStyles.size.md"
                class="transform transition-transform group-hover:translate-x-1">
              </lucide-icon>
            </button>
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

    .hero-button {
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
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
export class ProductHeroComponent {
  iconStyles = iconStyles;
}