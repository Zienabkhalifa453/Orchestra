import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialCardComponent } from './testimonial-card.component';
import { IconModule } from '../icons/icon.module';
import { iconStyles } from '../../styles/icon.styles';

@Component({
  selector: 'app-testimonial-section',
  standalone: true,
  imports: [CommonModule, TestimonialCardComponent, IconModule],
  template: `
    <section class="testimonials-section">
      <div class="container mx-auto px-4 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="section-title">What Our Clients Say</h2>
          <p class="section-subtitle">
            Trusted by leading companies worldwide
          </p>
        </div>

        <!-- Testimonials Grid -->
        <div class="testimonials-grid">
          <app-testimonial-card
            *ngFor="let testimonial of testimonials"
            [quote]="testimonial.quote"
            [name]="testimonial.name"
            [role]="testimonial.role"
            [image]="testimonial.image"
            [rating]="testimonial.rating">
          </app-testimonial-card>
        </div>

        <!-- Trust Badges -->
        <div class="trust-badges">
          <div *ngFor="let badge of trustBadges" class="badge">
            <lucide-icon 
              [name]="badge.icon" 
              [size]="iconStyles.size.md"
              [strokeWidth]="iconStyles.strokeWidth">
            </lucide-icon>
            <span>{{badge.text}}</span>
          </div>
        </div>
      </div>

      <!-- Background Elements -->
      <div class="background-elements">
        <div class="gradient-orb gradient-orb-1"></div>
        <div class="gradient-orb gradient-orb-2"></div>
        <div class="grid-pattern"></div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials-section {
      @apply relative py-20 bg-gray-50 overflow-hidden;
    }

    .section-title {
      @apply text-3xl md:text-4xl font-bold text-[#1f2251] mb-4;
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .section-subtitle {
      @apply text-lg text-gray-600 max-w-2xl mx-auto;
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
    }

    .testimonials-grid {
      @apply grid md:grid-cols-3 gap-6 max-w-6xl mx-auto;
      animation: fadeIn 1s ease-out 0.4s backwards;
    }

    .trust-badges {
      @apply flex flex-wrap justify-center gap-8 mt-12;
    }

    .badge {
      @apply flex items-center gap-2 px-4 py-2 
             bg-white/50 backdrop-blur-sm rounded-full
             border border-gray-100
             text-sm text-gray-600;

      lucide-icon {
        @apply text-[#2AB24B];
      }
    }

    .background-elements {
      @apply absolute inset-0 pointer-events-none;
    }

    .gradient-orb {
      @apply absolute rounded-full opacity-30 blur-3xl;
    }

    .gradient-orb-1 {
      @apply w-96 h-96 bg-[#2AB24B]/20 -top-48 -left-48;
    }

    .gradient-orb-2 {
      @apply w-96 h-96 bg-[#1f2251]/20 -bottom-48 -right-48;
    }

    .grid-pattern {
      @apply absolute inset-0 opacity-[0.015];
      background-image: 
        linear-gradient(rgba(31, 34, 81, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(31, 34, 81, 0.2) 1px, transparent 1px);
      background-size: 50px 50px;
    }

    @keyframes slideUp {
      from { 
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `]
})
export class TestimonialSectionComponent {
  iconStyles = iconStyles;

  testimonials = [
    {
      quote: "OrchestraSys transformed our operations with their innovative solutions. The results exceeded our expectations.",
      name: "John Smith",
      role: "CEO, Tech Corp",
      image: "assets/images/testimonial-1.jpg",
      rating: 5
    },
    {
      quote: "Their expertise and support have been invaluable. A true partner in our digital transformation journey.",
      name: "Sarah Johnson",
      role: "CTO, Global Finance",
      image: "assets/images/testimonial-2.jpg",
      rating: 5
    },
    {
      quote: "Outstanding service and cutting-edge solutions. They consistently deliver exceptional results.",
      name: "Michael Brown",
      role: "Director, HealthTech",
      image: "assets/images/testimonial-3.jpg",
      rating: 5
    }
  ];

  trustBadges = [
    { icon: 'shield-check', text: 'ISO 27001 Certified' },
    { icon: 'award', text: 'Top Tech Provider 2023' },
    { icon: 'users', text: '500+ Happy Clients' },
    { icon: 'globe', text: 'Global Coverage' }
  ];
}