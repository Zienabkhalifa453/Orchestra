import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../../../shared/components/icons/icon.module';
import { iconStyles } from '../../../../shared/styles/icon.styles';

@Component({
  selector: 'app-product-cta',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <section class="cta-section">
      <div class="cta-content">
        <h2 class="title">Ready to Get Started?</h2>
        <p class="description">
          Transform your business with our enterprise solutions. Schedule a demo today.
        </p>
        
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
            Contact Sales
            <lucide-icon 
              name="phone" 
              [size]="iconStyles.size.sm"
              class="group-hover:rotate-12">
            </lucide-icon>
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta-section {
      @apply bg-gradient-to-br from-[#1f2251] to-[#151937]
             rounded-2xl p-12 text-center relative overflow-hidden;
    }

    .cta-content {
      @apply relative z-10 max-w-2xl mx-auto;
    }

    .title {
      @apply text-3xl font-bold text-white mb-4;
      animation: fadeIn 0.8s ease-out;
    }

    .description {
      @apply text-white/80 mb-8;
      animation: fadeIn 0.8s ease-out 0.2s backwards;
    }

    .actions {
      @apply flex flex-wrap justify-center gap-4;
      animation: fadeIn 0.8s ease-out 0.4s backwards;
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
      @apply bg-white/10 text-white backdrop-blur-sm
             border border-white/20
             hover:bg-white/20;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ProductCTAComponent {
  iconStyles = iconStyles;
}