import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconModule } from '../../shared/components/icons/icon.module';
import { iconStyles } from '../../shared/styles/icon.styles';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, IconModule, RouterLink],
  template: `
    <div class="product-card group">
      <div class="card-icon">
        <lucide-icon 
          [name]="icon" 
          [size]="iconStyles.size.lg"
          [strokeWidth]="iconStyles.strokeWidth">
        </lucide-icon>
      </div>
      
      <h3 class="card-title">{{title}}</h3>
      <p class="card-description">{{description}}</p>
      
      <div class="card-features">
        <div *ngFor="let feature of features" class="feature-item">
          <lucide-icon 
            name="check-circle" 
            [size]="iconStyles.size.sm"
            class="text-[#2AB24B]">
          </lucide-icon>
          <span>{{feature}}</span>
        </div>
      </div>
      
      <a [routerLink]="['/products', id]" class="card-button group">
        Learn More
        <lucide-icon 
          name="arrow-right" 
          [size]="iconStyles.size.sm"
          class="transform transition-transform group-hover:translate-x-1">
        </lucide-icon>
      </a>
    </div>
  `,
  styles: [`
    .product-card {
      @apply bg-white rounded-2xl p-6
             border border-gray-100
             hover:border-[#2AB24B]/20
             shadow-lg shadow-gray-100/20
             hover:shadow-xl hover:shadow-[#2AB24B]/10
             transition-all duration-300 ease-out
             transform hover:-translate-y-1;
    }

    .card-icon {
      @apply w-12 h-12 rounded-xl
             bg-gradient-to-br from-[#2AB24B]/10 to-[#2AB24B]/5
             flex items-center justify-center mb-4
             group-hover:scale-110 transition-transform duration-300;

      lucide-icon {
        @apply text-[#2AB24B] transform
               group-hover:rotate-12 transition-transform duration-300;
      }
    }

    .card-title {
      @apply text-xl font-bold text-[#1f2251] mb-2;
    }

    .card-description {
      @apply text-sm text-gray-600 mb-4;
    }

    .card-features {
      @apply space-y-2 mb-6;
    }

    .feature-item {
      @apply flex items-center gap-2 text-sm text-gray-600;
    }

    .card-button {
      @apply w-full px-4 py-2 rounded-xl
             bg-gray-50 hover:bg-[#2AB24B]/10
             text-[#1f2251] hover:text-[#2AB24B]
             text-sm font-medium
             flex items-center justify-center gap-2
             transition-all duration-300;
    }
  `]
})
export class ProductCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() features: string[] = [];
  @Input() id!: string;

  iconStyles = iconStyles;
}