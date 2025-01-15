import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../../../shared/components/icons/icon.module';
import { iconStyles } from '../../../../shared/styles/icon.styles';

@Component({
  selector: 'app-product-overview',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <section class="overview-section">
      <div class="content-wrapper">
        <!-- Product Info -->
        <div class="product-info">
          <h1 class="title">Enterprise Solutions</h1>
          <p class="subtitle">Transform your business operations</p>
          <p class="description">
            Our comprehensive enterprise solutions help businesses streamline operations, 
            improve efficiency, and drive growth through innovative technology.
          </p>
          
          <!-- Key Benefits -->
          <div class="benefits">
            <div *ngFor="let benefit of benefits" class="benefit-item">
              <lucide-icon 
                [name]="benefit.icon" 
                [size]="iconStyles.size.md"
                class="benefit-icon">
              </lucide-icon>
              <span>{{benefit.text}}</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="actions">
            <button class="btn-primary group">
              Schedule Demo
              <lucide-icon 
                name="calendar" 
                [size]="iconStyles.size.sm"
                class="group-hover:translate-x-1">
              </lucide-icon>
            </button>
            <button class="btn-secondary group">
              Download Brochure
              <lucide-icon 
                name="download" 
                [size]="iconStyles.size.sm"
                class="group-hover:translate-y-1">
              </lucide-icon>
            </button>
          </div>
        </div>

        <!-- Product Preview -->
        <div class="product-preview">
          <div class="preview-card">
            <img src="assets/images/products/enterprise-preview.jpg" 
                 alt="Enterprise Solutions Preview"
                 class="preview-image">
            <div class="preview-overlay">
              <button class="preview-button group">
                <lucide-icon 
                  name="play-circle" 
                  [size]="iconStyles.size.lg"
                  class="group-hover:scale-110">
                </lucide-icon>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .overview-section {
      @apply mb-24;
    }

    .content-wrapper {
      @apply grid md:grid-cols-2 gap-12 items-center;
    }

    .product-info {
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .title {
      @apply text-4xl font-bold text-[#1f2251] mb-2;
    }

    .subtitle {
      @apply text-xl text-[#2AB24B] font-medium mb-4;
    }

    .description {
      @apply text-gray-600 leading-relaxed mb-8;
    }

    .benefits {
      @apply space-y-4 mb-8;
    }

    .benefit-item {
      @apply flex items-center gap-3 text-gray-600;
    }

    .benefit-icon {
      @apply text-[#2AB24B];
    }

    .actions {
      @apply flex flex-wrap gap-4;
    }

    .btn-primary, .btn-secondary {
      @apply flex items-center gap-2 px-6 py-3 rounded-xl
             font-medium transition-all duration-300;

      lucide-icon {
        @apply transition-transform duration-300;
      }
    }

    .btn-primary {
      @apply bg-[#2AB24B] text-white
             hover:bg-[#229A3E];
    }

    .btn-secondary {
      @apply bg-white text-[#1f2251] border border-gray-200
             hover:border-[#2AB24B]/20 hover:bg-[#2AB24B]/5;
    }

    .product-preview {
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
    }

    .preview-card {
      @apply relative rounded-2xl overflow-hidden
             border border-gray-100 shadow-xl;
    }

    .preview-image {
      @apply w-full h-auto;
    }

    .preview-overlay {
      @apply absolute inset-0 bg-black/50 backdrop-blur-sm
             flex items-center justify-center
             opacity-0 transition-opacity duration-300;
    }

    .preview-card:hover .preview-overlay {
      @apply opacity-100;
    }

    .preview-button {
      @apply flex items-center gap-3 text-white font-medium;

      lucide-icon {
        @apply transition-transform duration-300;
      }
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
export class ProductOverviewComponent {
  iconStyles = iconStyles;

  benefits = [
    { icon: 'check-circle', text: 'Streamlined Operations' },
    { icon: 'check-circle', text: 'Enhanced Productivity' },
    { icon: 'check-circle', text: 'Real-time Analytics' },
    { icon: 'check-circle', text: 'Secure Infrastructure' }
  ];
}