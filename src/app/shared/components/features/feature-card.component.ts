import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icons/icon.module';
import { iconStyles } from '../../styles/icon.styles';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <div class="feature-card group">
      <div class="icon-wrapper">
        <lucide-icon 
          [name]="icon" 
          [size]="iconStyles.size.lg"
          [strokeWidth]="iconStyles.strokeWidth"
          class="icon">
        </lucide-icon>
      </div>
      <h3 class="title">{{title}}</h3>
      <p class="description">{{description}}</p>
    </div>
  `,
  styles: [`
    .feature-card {
      @apply relative p-6 rounded-2xl bg-white
             border border-gray-100
             hover:border-[#2AB24B]/20
             transition-all duration-500
             hover:shadow-lg hover:shadow-[#2AB24B]/5
             hover:-translate-y-1;
    }

    .icon-wrapper {
      @apply w-12 h-12 rounded-xl mb-4
             bg-gradient-to-br from-[#2AB24B]/10 to-[#2AB24B]/5
             flex items-center justify-center
             group-hover:scale-110 transition-all duration-500;

      .icon {
        @apply text-[#2AB24B] transform transition-all duration-500
               group-hover:rotate-12;
      }
    }

    .title {
      @apply text-lg font-semibold text-[#1f2251] mb-2
             group-hover:text-[#2AB24B] transition-colors duration-300;
    }

    .description {
      @apply text-sm text-gray-600 leading-relaxed;
    }
  `]
})
export class FeatureCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
  
  iconStyles = iconStyles;
}