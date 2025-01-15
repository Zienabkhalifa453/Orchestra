import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icons/icon.module';
import { iconStyles } from '../../styles/icon.styles';

@Component({
  selector: 'app-footer-contact',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <div class="contact-section">
      <h4 class="text-lg font-semibold mb-6">Contact Us</h4>
      <div class="space-y-4">
        <a *ngFor="let contact of contacts" 
           [href]="contact.href"
           class="contact-link group">
          <div class="icon-wrapper">
            <lucide-icon 
              [name]="contact.icon" 
              [size]="iconStyles.size.md"
              [strokeWidth]="iconStyles.strokeWidth">
            </lucide-icon>
          </div>
          <span>{{contact.text}}</span>
        </a>
      </div>
    </div>
  `,
  styles: [`
    .contact-section {
      animation: slideIn 0.5s ease-out 0.2s backwards;
    }

    .contact-link {
      @apply flex items-center gap-4 text-gray-300 
             hover:text-[#2AB24B] transition-all duration-300;
    }

    .icon-wrapper {
      @apply p-2 rounded-lg bg-white/5 backdrop-blur-sm
             group-hover:bg-[#2AB24B]/10 transition-all duration-300;

      lucide-icon {
        @apply text-gray-400 group-hover:text-[#2AB24B] 
               transition-all duration-300;
      }
    }

    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }
  `]
})
export class FooterContactComponent {
  iconStyles = iconStyles;
  
  contacts = [
    {
      icon: 'map-pin',
      text: '123 Business Street, Tech City, 12345',
      href: 'https://maps.google.com'
    },
    {
      icon: 'mail',
      text: 'contact@orchestrasys.com',
      href: 'mailto:contact@orchestrasys.com'
    },
    {
      icon: 'phone',
      text: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    }
  ];
}