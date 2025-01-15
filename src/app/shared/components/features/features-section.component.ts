import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from './feature-card.component';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule, FeatureCardComponent],
  template: `
    <section class="features-section">
      <div class="container mx-auto px-4 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="section-title">Why Choose OrchestraSys?</h2>
          <p class="section-subtitle">Experience excellence in every aspect of our service</p>
        </div>

        <!-- Features Grid -->
        <div class="features-grid">
          <app-feature-card
            *ngFor="let feature of features; let i = index"
            [icon]="feature.icon"
            [title]="feature.title"
            [description]="feature.description"
            [attr.data-aos-delay]="i * 100">
          </app-feature-card>
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
    .features-section {
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

    .features-grid {
      @apply grid md:grid-cols-3 gap-6 max-w-6xl mx-auto;
      animation: fadeIn 1s ease-out 0.4s backwards;
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
export class FeaturesSectionComponent {
  features = [
    {
      icon: 'zap',
      title: 'Lightning Fast',
      description: 'Experience blazing-fast performance with our optimized solutions that keep your business running at peak efficiency.'
    },
    {
      icon: 'shield',
      title: 'Enterprise Security',
      description: 'Bank-grade security measures ensure your data and operations are protected against modern threats.'
    },
    {
      icon: 'trending-up',
      title: 'Scalable Growth',
      description: 'Our solutions grow with your business, providing the flexibility you need for sustainable expansion.'
    },
    {
      icon: 'users',
      title: 'Expert Support',
      description: '24/7 dedicated support from our team of experts ensures your success at every step.'
    },
    {
      icon: 'code',
      title: 'Custom Solutions',
      description: 'Tailored solutions designed specifically for your unique business requirements and challenges.'
    },
    {
      icon: 'refresh-cw',
      title: 'Continuous Innovation',
      description: 'Stay ahead with our commitment to continuous improvement and cutting-edge technologies.'
    }
  ];
}