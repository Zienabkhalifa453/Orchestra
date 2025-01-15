import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FounderCardComponent } from './founder-card.component';
import { IconModule } from '../icons/icon.module';
import { iconStyles } from '../../styles/icon.styles';

@Component({
  selector: 'app-founders-slider',
  standalone: true,
  imports: [CommonModule, FounderCardComponent, IconModule],
  template: `
    <div class="slider-container">
      <!-- Slides -->
      <div class="slides-wrapper" [style.transform]="'translateX(' + currentTranslate + '%)'">
        <div *ngFor="let founder of founders; let i = index" 
             class="slide"
             [class.active]="i === currentSlide">
          <app-founder-card
            [image]="founder.image"
            [name]="founder.name"
            [role]="founder.role"
            [bio]="founder.bio"
            [achievements]="founder.achievements"
            [socials]="founder.socials">
          </app-founder-card>
        </div>
      </div>

      <!-- Navigation -->
      <div class="slider-nav">
        <button (click)="prevSlide()" 
                class="nav-button group"
                [class.disabled]="currentSlide === 0">
          <lucide-icon 
            name="chevron-left" 
            [size]="iconStyles.size.md"
            class="group-hover:-translate-x-1">
          </lucide-icon>
        </button>

        <div class="slider-dots">
          <button *ngFor="let founder of founders; let i = index" 
                  (click)="goToSlide(i)"
                  class="dot"
                  [class.active]="i === currentSlide">
          </button>
        </div>

        <button (click)="nextSlide()" 
                class="nav-button group"
                [class.disabled]="currentSlide === founders.length - 1">
          <lucide-icon 
            name="chevron-right" 
            [size]="iconStyles.size.md"
            class="group-hover:translate-x-1">
          </lucide-icon>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .slider-container {
      @apply relative max-w-6xl mx-auto overflow-hidden;
    }

    .slides-wrapper {
      @apply flex transition-transform duration-500 ease-out;
    }

    .slide {
      @apply w-full flex-shrink-0 px-4;
      
      &.active {
        animation: slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      }
    }

    .slider-nav {
      @apply absolute bottom-8 left-1/2 -translate-x-1/2
             flex items-center gap-6 bg-white/80 backdrop-blur-sm
             px-6 py-3 rounded-full shadow-lg;
    }

    .nav-button {
      @apply p-2 rounded-full bg-white/50 hover:bg-[#2AB24B]/10
             transition-all duration-300 disabled:opacity-50
             disabled:cursor-not-allowed;

      lucide-icon {
        @apply text-[#1f2251] transition-transform duration-300;
      }

      &.disabled {
        @apply opacity-50 cursor-not-allowed;
        
        lucide-icon {
          @apply transform-none;
        }
      }
    }

    .slider-dots {
      @apply flex items-center gap-2;
    }

    .dot {
      @apply w-2 h-2 rounded-full bg-gray-300 transition-all duration-300;

      &.active {
        @apply w-4 bg-[#2AB24B];
      }

      &:hover:not(.active) {
        @apply bg-gray-400;
      }
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `]
})
export class FoundersSliderComponent {
  iconStyles = iconStyles;
  currentSlide = 0;
  currentTranslate = 0;
  
  founders = [
    {
      image: 'assets/images/founder-1.jpg',
      name: 'John Anderson',
      role: 'CEO & Co-Founder',
      bio: 'A visionary leader with over 15 years of experience in enterprise technology solutions. John has led multiple successful digital transformation initiatives for Fortune 500 companies.',
      achievements: [
        { icon: 'award', text: 'Tech Innovator of the Year 2022' },
        { icon: 'briefcase', text: '20+ Enterprise Solutions Delivered' },
        { icon: 'users', text: 'Built 3 Successful Tech Companies' }
      ],
      socials: [
        { icon: 'linkedin', url: 'https://linkedin.com' },
        { icon: 'twitter', url: 'https://twitter.com' }
      ]
    },
    {
      image: 'assets/images/founder-2.jpg',
      name: 'Sarah Mitchell',
      role: 'CTO & Co-Founder',
      bio: 'A pioneering technologist specializing in cloud architecture and AI solutions. Sarah brings deep expertise in building scalable, enterprise-grade systems.',
      achievements: [
        { icon: 'code', text: 'Patent Holder: Cloud Architecture' },
        { icon: 'book', text: 'Published Author: Cloud Computing' },
        { icon: 'star', text: 'MIT Technology Review Innovator' }
      ],
      socials: [
        { icon: 'linkedin', url: 'https://linkedin.com' },
        { icon: 'github', url: 'https://github.com' }
      ]
    },
    {
      image: 'assets/images/founder-3.jpg',
      name: 'Michael Chen',
      role: 'COO & Co-Founder',
      bio: 'An operations excellence expert with a proven track record in scaling technology companies. Michael focuses on delivering exceptional client experiences.',
      achievements: [
        { icon: 'trending-up', text: '300% Company Growth in 2 Years' },
        { icon: 'shield', text: 'ISO 27001 Implementation Lead' },
        { icon: 'globe', text: 'Expanded to 15 Countries' }
      ],
      socials: [
        { icon: 'linkedin', url: 'https://linkedin.com' },
        { icon: 'twitter', url: 'https://twitter.com' }
      ]
    }
  ];

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateTranslate();
    }
  }

  nextSlide() {
    if (this.currentSlide < this.founders.length - 1) {
      this.currentSlide++;
      this.updateTranslate();
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateTranslate();
  }

  private updateTranslate() {
    this.currentTranslate = -100 * this.currentSlide;
  }
}