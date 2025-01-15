import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icons/icon.module';
import { iconStyles } from '../../styles/icon.styles';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <div class="testimonial-card group">
      <!-- Quote Icon -->
      <div class="quote-icon">
        <lucide-icon 
          name="quote" 
          [size]="iconStyles.size.lg"
          [strokeWidth]="iconStyles.strokeWidth">
        </lucide-icon>
      </div>

      <!-- Content -->
      <blockquote class="quote-text">{{quote}}</blockquote>

      <!-- Author Info -->
      <div class="author-section">
        <div class="author-image">
          <img [src]="image" [alt]="name" class="rounded-full">
        </div>
        <div class="author-info">
          <h4 class="author-name">{{name}}</h4>
          <p class="author-role">{{role}}</p>
        </div>
      </div>

      <!-- Rating -->
      <div class="rating">
        <lucide-icon 
          *ngFor="let star of [1,2,3,4,5]"
          name="star" 
          [size]="iconStyles.size.sm"
          [class.filled]="star <= rating"
          class="star">
        </lucide-icon>
      </div>
    </div>
  `,
  styles: [`
    .testimonial-card {
      @apply relative p-8 bg-white rounded-2xl
             border border-gray-100
             hover:border-[#2AB24B]/20
             transition-all duration-500
             hover:shadow-xl hover:shadow-[#2AB24B]/5
             transform hover:-translate-y-1;
    }

    .quote-icon {
      @apply absolute -top-4 -left-4 w-12 h-12
             bg-gradient-to-br from-[#2AB24B] to-[#229A3E]
             rounded-xl flex items-center justify-center
             group-hover:scale-110 transition-transform duration-300;

      lucide-icon {
        @apply text-white transform -scale-x-100;
      }
    }

    .quote-text {
      @apply text-gray-600 text-lg leading-relaxed mb-8
             italic relative z-10;
    }

    .author-section {
      @apply flex items-center gap-4 mb-4;
    }

    .author-image {
      @apply w-14 h-14 rounded-full overflow-hidden
             border-2 border-[#2AB24B]/20
             group-hover:scale-110 transition-transform duration-300;

      img {
        @apply w-full h-full object-cover;
      }
    }

    .author-info {
      @apply flex-grow;
    }

    .author-name {
      @apply font-semibold text-[#1f2251] mb-1
             group-hover:text-[#2AB24B] transition-colors duration-300;
    }

    .author-role {
      @apply text-sm text-gray-500;
    }

    .rating {
      @apply flex gap-1;
    }

    .star {
      @apply text-gray-300 transition-colors duration-300;

      &.filled {
        @apply text-[#2AB24B];
      }
    }
  `]
})
export class TestimonialCardComponent {
  @Input() quote!: string;
  @Input() name!: string;
  @Input() role!: string;
  @Input() image!: string;
  @Input() rating: number = 5;

  iconStyles = iconStyles;
}