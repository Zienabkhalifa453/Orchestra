import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../shared/components/icons/icon.module';
import { iconStyles } from '../../shared/styles/icon.styles';

@Component({
  selector: 'app-product-feature',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <section class="py-20 bg-[#1f2251] relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-[#2AB24B]/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#2AB24B]/20 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 relative">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose Our Solutions?
          </h2>
          <p class="text-xl text-white/80 max-w-2xl mx-auto">
            Experience the difference with our innovative approach to enterprise solutions.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div *ngFor="let feature of features; let i = index"
               class="feature-card">
            <div class="icon-wrapper">
              <lucide-icon 
                [name]="feature.icon" 
                [size]="iconStyles.size.lg"
                [strokeWidth]="iconStyles.strokeWidth">
              </lucide-icon>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">{{feature.title}}</h3>
            <p class="text-white/80">{{feature.description}}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .feature-card {
      @apply p-8 rounded-2xl bg-white/5 backdrop-blur-sm
             border border-white/10 hover:border-[#2AB24B]/30
             transition-all duration-300 hover:-translate-y-1;
      animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;

      &:nth-child(1) { animation-delay: 0.1s; }
      &:nth-child(2) { animation-delay: 0.2s; }
      &:nth-child(3) { animation-delay: 0.3s; }
    }

    .icon-wrapper {
      @apply w-16 h-16 rounded-xl bg-[#2AB24B]/20
             flex items-center justify-center mb-6;

      lucide-icon {
        @apply text-[#2AB24B];
      }
    }

    @keyframes fadeIn {
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
export class ProductFeatureComponent {
  iconStyles = iconStyles;

  features = [
    {
      icon: 'zap',
      title: 'Lightning Fast',
      description: 'Experience blazing-fast performance with our optimized solutions.'
    },
    {
      icon: 'shield-check',
      title: 'Secure by Design',
      description: 'Built with security at its core, ensuring your data stays protected.'
    },
    {
      icon: 'trending-up',
      title: 'Scalable Growth',
      description: 'Solutions that grow with your business, adapting to your needs.'
    }
  ];
}