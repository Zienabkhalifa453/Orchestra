import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icons/icon.module';
import { iconStyles } from '../../styles/icon.styles';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <div class="slider-container">
      <!-- Slides -->
      <div class="slides-wrapper" [style.transform]="'translateX(' + currentTranslate + '%)'">
        <div *ngFor="let slide of slides; let i = index" 
             class="slide"
             [class.active]="i === currentSlide">
          <div class="slide-content">
            <h2 class="slide-title">{{slide.title}}</h2>
            <p class="slide-description">{{slide.description}}</p>
          </div>
          <div class="slide-image">
            <img [src]="slide.image" [alt]="slide.title" class="rounded-2xl shadow-2xl">
          </div>
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
          <button *ngFor="let slide of slides; let i = index" 
                  (click)="goToSlide(i)"
                  class="dot"
                  [class.active]="i === currentSlide">
          </button>
        </div>

        <button (click)="nextSlide()" 
                class="nav-button group"
                [class.disabled]="currentSlide === slides.length - 1">
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
      @apply relative w-full max-w-6xl mx-auto overflow-hidden;
    }

    .slides-wrapper {
      @apply flex transition-transform duration-500 ease-out;
    }

    .slide {
      @apply w-full flex-shrink-0 flex items-center justify-between gap-12 px-8;
      
      &.active {
        .slide-content, .slide-image {
          animation: slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
      }
    }

    .slide-content {
      @apply flex-1;
    }

    .slide-title {
      @apply text-4xl font-bold text-[#1f2251] mb-4;
    }

    .slide-description {
      @apply text-lg text-gray-600;
    }

    .slide-image {
      @apply flex-1;
      
      img {
        @apply w-full h-auto;
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
export class HeroSliderComponent implements OnInit, OnDestroy {
  iconStyles = iconStyles;
  
  slides = [
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive software solutions tailored for your business needs.',
      image: 'assets/images/enterprise.jpg'
    },
    {
      title: 'Cloud Services',
      description: 'Scalable and secure cloud infrastructure for modern businesses.',
      image: 'assets/images/cloud.jpg'
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights.',
      image: 'assets/images/analytics.jpg'
    }
  ];

  currentSlide = 0;
  currentTranslate = 0;
  autoplayInterval?: any;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateTranslate();
    }
  }

  nextSlide() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
      this.updateTranslate();
    } else {
      this.currentSlide = 0;
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