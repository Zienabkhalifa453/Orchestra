import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icons/icon.module';
import { iconStyles } from '../../styles/icon.styles';

@Component({
  selector: 'app-footer-social',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <div class="social-links">
      <a *ngFor="let social of socialLinks"
         [href]="social.url"
         [attr.aria-label]="social.label"
         class="social-link group"
         target="_blank"
         rel="noopener noreferrer">
         <lucide-icon 
           [name]="social.icon" 
           [size]="iconStyles.size.md"
           [strokeWidth]="iconStyles.strokeWidth">
         </lucide-icon>
      </a>
    </div>
  `,
  styles: [`
    .social-links {
      @apply flex flex-wrap gap-4;
    }

    .social-link {
      @apply flex items-center justify-center w-11 h-11 
             rounded-full bg-white/5 backdrop-blur-lg
             hover:bg-gradient-to-br from-[#2AB24B] to-[#229A3E]
             transition-all duration-300 ease-out
             hover:scale-105 hover:shadow-lg hover:shadow-[#2AB24B]/20
             border border-white/10 hover:border-transparent;

      lucide-icon {
        @apply text-gray-400 transition-all duration-300;
      }

      &:hover lucide-icon {
        @apply text-white scale-110;
      }
    }
  `]
})
export class FooterSocialComponent {
  iconStyles = iconStyles;
  
  socialLinks = [
    { label: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
    { label: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { label: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { label: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { label: 'GitHub', url: 'https://github.com', icon: 'github' }
  ];
}