import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../../../shared/components/icons/icon.module';
import { iconStyles } from '../../../../shared/styles/icon.styles';

@Component({
  selector: 'app-product-feature-list',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <section class="features-section">
      <h2 class="section-title">Key Features</h2>
      <p class="section-subtitle">Everything you need to transform your business</p>

      <div class="features-grid">
        <div *ngFor="let feature of features; let i = index"
             class="feature-card group"
             [style.animation-delay]="i * 0.1 + 's'">
          <div class="icon-wrapper">
            <lucide-icon 
              [name]="feature.icon" 
              [size]="iconStyles.size.lg"
              [strokeWidth]="iconStyles.strokeWidth">
            </lucide-icon>
          </div>
          <h3 class="feature-title">{{feature.title}}</h3>
          <p class="feature-description">{{feature.description}}</p>
          <ul class="feature-points">
            <li *ngFor="let point of feature.points" class="point">
              <lucide-icon 
                name="check" 
                [size]="iconStyles.size.sm"
                class="point-icon">
              </lucide-icon>
              <span>{{point}}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .features-section {
      @apply mb-24;
    }

    .section-title {
      @apply text-3xl font-bold text-[#1f2251] text-center mb-2;
    }

    .section-subtitle {
      @apply text-gray-600 text-center mb-12;
    }

    .features-grid {
      @apply grid md:grid-cols-3 gap-8;
    }

    .feature-card {
      @apply bg-white p-6 rounded-2xl
             border border-gray-100
             hover:border-[#2AB24B]/20
             transition-all duration-500
             hover:shadow-xl hover:shadow-[#2AB24B]/5
             transform hover:-translate-y-1;
      animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;
    }

    .icon-wrapper {
      @apply w-12 h-12 rounded-xl
             bg-gradient-to-br from-[#2AB24B]/10 to-[#2AB24B]/5
             flex items-center justify-center mb-4
             group-hover:scale-110 transition-transform duration-500;

      lucide-icon {
        @apply text-[#2AB24B] transform transition-transform duration-500
               group-hover:rotate-12;
      }
    }

    .feature-title {
      @apply text-xl font-semibold text-[#1f2251] mb-2;
    }

    .feature-description {
      @apply text-gray-600 text-sm mb-4;
    }

    .feature-points {
      @apply space-y-2;
    }

    .point {
      @apply flex items-center gap-2 text-sm text-gray-600;
    }

    .point-icon {
      @apply text-[#2AB24B];
    }

    @keyframes fadeIn {
      from { 
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class ProductFeatureListComponent {
  iconStyles = iconStyles;

  features = [
    {
      icon: 'layout-grid',
      title: 'Modular Architecture',
      description: 'Flexible and scalable system design',
      points: [
        'Customizable modules',
        'Easy integration',
        'Scalable infrastructure'
      ]
    },
    {
      icon: 'shield',
      title: 'Enterprise Security',
      description: 'Advanced security measures',
      points: [
        'End-to-end encryption',
        'Access control',
        'Compliance ready'
      ]
    },
    {
      icon: 'bar-chart',
      title: 'Analytics & Insights',
      description: 'Data-driven decision making',
      points: [
        'Real-time analytics',
        'Custom reports',
        'Predictive insights'
      ]
    }
  ];
}