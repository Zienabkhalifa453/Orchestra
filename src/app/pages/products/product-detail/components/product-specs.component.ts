import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../../../shared/components/icons/icon.module';
import { iconStyles } from '../../../../shared/styles/icon.styles';

@Component({
  selector: 'app-product-specs',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <section class="specs-section">
      <div class="specs-content">
        <div class="specs-info">
          <h2 class="title">Technical Specifications</h2>
          <p class="description">
            Built with modern technologies and best practices to ensure optimal performance and reliability.
          </p>
          
          <div class="specs-list">
            <div *ngFor="let spec of specs" class="spec-item">
              <div class="spec-icon">
                <lucide-icon 
                  [name]="spec.icon" 
                  [size]="iconStyles.size.md"
                  [strokeWidth]="iconStyles.strokeWidth">
                </lucide-icon>
              </div>
              <div class="spec-content">
                <h3 class="spec-title">{{spec.title}}</h3>
                <p class="spec-description">{{spec.description}}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="specs-image">
          <img src="assets/images/products/tech-specs.jpg" 
               alt="Technical Specifications"
               class="rounded-2xl shadow-2xl">
        </div>
      </div>
    </section>
  `,
  styles: [`
    .specs-section {
      @apply mb-24 bg-[#1f2251] py-24 -mx-4 px-4;
    }

    .specs-content {
      @apply grid md:grid-cols-2 gap-12 items-center
             max-w-6xl mx-auto;
    }

    .specs-info {
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .title {
      @apply text-3xl font-bold text-white mb-4;
    }

    .description {
      @apply text-white/80 mb-8;
    }

    .specs-list {
      @apply space-y-6;
    }

    .spec-item {
      @apply flex gap-4 p-4 rounded-xl
             bg-white/5 backdrop-blur-sm
             border border-white/10
             hover:border-[#2AB24B]/30
             transition-all duration-300;
    }

    .spec-icon {
      @apply w-12 h-12 rounded-xl
             bg-[#2AB24B]/20 flex items-center justify-center;

      lucide-icon {
        @apply text-[#2AB24B];
      }
    }

    .spec-content {
      @apply flex-1;
    }

    .spec-title {
      @apply text-lg font-semibold text-white mb-1;
    }

    .spec-description {
      @apply text-white/70 text-sm;
    }

    .specs-image {
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
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
export class ProductSpecsComponent {
  iconStyles = iconStyles;

  specs = [
    {
      icon: 'cpu',
      title: 'High Performance',
      description: 'Optimized for maximum speed and efficiency'
    },
    {
      icon: 'shield',
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption'
    },
    {
      icon: 'git-branch',
      title: 'Scalable Architecture',
      description: 'Grows with your business needs'
    },
    {
      icon: 'cloud',
      title: 'Cloud Native',
      description: 'Built for modern cloud infrastructure'
    }
  ];
}