import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconModule } from '../icons/icon.module';
import { iconStyles } from '../../styles/icon.styles';

@Component({
  selector: 'app-footer-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule, IconModule],
  template: `
    <div class="newsletter-section space-y-6">
      <div>
        <h4 class="text-lg font-semibold mb-2">Stay Updated</h4>
        <p class="text-gray-300 text-sm">
          Subscribe to our newsletter for the latest updates and insights.
        </p>
      </div>
      
      <form (submit)="onSubmit($event)" class="space-y-3">
        <div class="relative">
          <input
            type="email"
            placeholder="Enter your email"
            class="newsletter-input"
            [(ngModel)]="email"
            name="email"
          />
        </div>
        <button type="submit" class="newsletter-button group">
          Subscribe
          <lucide-icon 
            name="send" 
            [size]="iconStyles.size.sm"
            [strokeWidth]="iconStyles.strokeWidth"
            class="transform group-hover:translate-x-1">
          </lucide-icon>
        </button>
      </form>
    </div>
  `,
  styles: [`
    .newsletter-section {
      animation: slideIn 0.5s ease-out 0.3s backwards;
    }

    .newsletter-input {
      @apply w-full px-4 py-3 rounded-lg bg-white/5 text-white 
             placeholder-gray-400 border border-white/10 
             focus:outline-none focus:border-[#2AB24B] 
             focus:ring-1 focus:ring-[#2AB24B] transition-all duration-300;
    }

    .newsletter-button {
      @apply w-full px-4 py-3 rounded-lg 
             inline-flex items-center justify-center gap-3
             bg-gradient-to-r from-[#2AB24B] to-[#229A3E]
             hover:from-[#229A3E] hover:to-[#2AB24B]
             transition-all duration-300 
             transform hover:-translate-y-0.5
             focus:outline-none focus:ring-2 focus:ring-[#2AB24B] 
             focus:ring-offset-2 focus:ring-offset-[#1f2251];

      lucide-icon {
        @apply transition-transform duration-300;
      }
    }

    @keyframes slideIn {
      from { opacity: 0; transform: translateX(20px); }
      to { opacity: 1; transform: translateX(0); }
    }
  `]
})
export class FooterNewsletterComponent {
  iconStyles = iconStyles;
  email: string = '';

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Newsletter subscription:', this.email);
    this.email = '';
  }
}