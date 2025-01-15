import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../../shared/components/icons/icon.module';
import { iconStyles } from '../../../shared/styles/icon.styles';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <div class="contact-info">
      <h2 class="title">Get in Touch</h2>
      <p class="description">
        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>

      <div class="info-items">
        <a *ngFor="let item of contactItems" 
           [href]="item.href"
           class="info-item group">
          <div class="icon-wrapper">
            <lucide-icon 
              [name]="item.icon" 
              [size]="iconStyles.size.md"
              [strokeWidth]="iconStyles.strokeWidth">
            </lucide-icon>
          </div>
          <div class="content">
            <span class="label">{{item.label}}</span>
            <span class="value">{{item.value}}</span>
          </div>
        </a>
      </div>

      <div class="social-links">
        <a *ngFor="let social of socialLinks"
           [href]="social.url"
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
    </div>
  `,
  styles: [`
    .contact-info {
      @apply space-y-8;
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .title {
      @apply text-3xl font-bold text-[#1f2251];
    }

    .description {
      @apply text-gray-600 leading-relaxed;
    }

    .info-items {
      @apply space-y-6;
    }

    .info-item {
      @apply flex items-center gap-4 p-4 rounded-xl
             bg-white border border-gray-100
             hover:border-[#2AB24B]/20 transition-all duration-300
             hover:shadow-lg hover:shadow-[#2AB24B]/5;
    }

    .icon-wrapper {
      @apply w-12 h-12 rounded-xl bg-[#2AB24B]/10
             flex items-center justify-center
             group-hover:scale-110 transition-transform duration-300;

      lucide-icon {
        @apply text-[#2AB24B];
      }
    }

    .content {
      @apply flex flex-col;
    }

    .label {
      @apply text-sm text-gray-500;
    }

    .value {
      @apply text-[#1f2251] font-medium;
    }

    .social-links {
      @apply flex gap-4 pt-6 border-t border-gray-100;
    }

    .social-link {
      @apply w-10 h-10 rounded-lg bg-gray-50
             flex items-center justify-center
             hover:bg-[#2AB24B] transition-all duration-300;

      lucide-icon {
        @apply text-gray-400 group-hover:text-white
               transition-colors duration-300;
      }
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ContactInfoComponent {
  iconStyles = iconStyles;

  contactItems = [
    {
      icon: 'map-pin',
      label: 'Visit us',
      value: '123 Business Street, Tech City, 12345',
      href: 'https://maps.google.com'
    },
    {
      icon: 'mail',
      label: 'Email us',
      value: 'contact@orchestrasys.com',
      href: 'mailto:contact@orchestrasys.com'
    },
    {
      icon: 'phone',
      label: 'Call us',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    }
  ];

  socialLinks = [
    { icon: 'linkedin', url: 'https://linkedin.com' },
    { icon: 'twitter', url: 'https://twitter.com' },
    { icon: 'facebook', url: 'https://facebook.com' },
    { icon: 'instagram', url: 'https://instagram.com' }
  ];
}