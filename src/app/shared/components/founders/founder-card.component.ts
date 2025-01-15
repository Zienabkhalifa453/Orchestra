import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icons/icon.module';
import { iconStyles } from '../../styles/icon.styles';

@Component({
  selector: 'app-founder-card',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <div class="founder-card">
      <div class="card-content">
        <!-- Image and Basic Info -->
        <div class="image-section">
          <div class="image-container">
            <img [src]="image" [alt]="name" class="founder-image">
          </div>
          <div class="info-overlay">
            <h3 class="name">{{name}}</h3>
            <p class="role">{{role}}</p>
          </div>
        </div>

        <!-- Details Section -->
        <div class="details-section">
          <div class="bio-section">
            <p class="bio">{{bio}}</p>
            <div class="achievements">
              <div *ngFor="let achievement of achievements" class="achievement-item">
                <lucide-icon 
                  [name]="achievement.icon" 
                  [size]="iconStyles.size.sm"
                  class="achievement-icon">
                </lucide-icon>
                <span>{{achievement.text}}</span>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="social-links">
            <a *ngFor="let social of socials" 
               [href]="social.url" 
               class="social-link group"
               target="_blank" 
               rel="noopener noreferrer">
              <lucide-icon 
                [name]="social.icon" 
                [size]="iconStyles.size.sm"
                [strokeWidth]="iconStyles.strokeWidth">
              </lucide-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .founder-card {
      @apply bg-white rounded-xl overflow-hidden shadow-md
             hover:shadow-xl transition-all duration-300
             border border-gray-100 hover:border-[#2AB24B]/20;
    }

    .card-content {
      @apply flex flex-col h-full;
    }

    .image-section {
      @apply relative flex items-center justify-center p-4;
    }

    .image-container {
      @apply relative w-24 h-24 rounded-full overflow-hidden
             border-2 border-[#2AB24B]/20 shadow-lg;
    }

    .founder-image {
      @apply w-full h-full object-cover;
    }

    .info-overlay {
      @apply text-center mt-2;
    }

    .name {
      @apply text-lg font-bold text-[#1f2251] mb-0.5;
    }

    .role {
      @apply text-sm text-[#2AB24B];
    }

    .details-section {
      @apply p-4 flex flex-col justify-between flex-grow;
    }

    .bio-section {
      @apply space-y-3;
    }

    .bio {
      @apply text-sm text-gray-600 leading-relaxed;
    }

    .achievements {
      @apply space-y-2 mt-3;
    }

    .achievement-item {
      @apply flex items-center gap-2 text-xs text-gray-600;

      .achievement-icon {
        @apply text-[#2AB24B];
      }
    }

    .social-links {
      @apply flex justify-start gap-2 mt-4 pt-4 border-t border-gray-100;
    }

    .social-link {
      @apply p-1.5 rounded-full bg-gray-50
             hover:bg-[#2AB24B] transition-colors duration-300;

      lucide-icon {
        @apply text-gray-600 group-hover:text-white
               transition-colors duration-300;
      }
    }
  `]
})
export class FounderCardComponent {
  @Input() image!: string;
  @Input() name!: string;
  @Input() role!: string;
  @Input() bio!: string;
  @Input() achievements: Array<{icon: string, text: string}> = [];
  @Input() socials: Array<{icon: string, url: string}> = [];

  iconStyles = iconStyles;
}