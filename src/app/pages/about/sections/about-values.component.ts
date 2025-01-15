import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../../shared/components/icons/icon.module';
import { iconStyles } from '../../../shared/styles/icon.styles';

@Component({
  selector: 'app-about-values',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <section class="relative py-20 bg-gray-50 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-[#2AB24B]/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#1f2251]/10 rounded-full blur-3xl"></div>
        <div class="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-[#1f2251] mb-4">Our Core Values</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <!-- Values Grid -->
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div *ngFor="let value of values; let i = index" 
               class="value-card">
            <div class="value-icon">
              <lucide-icon 
                [name]="value.icon" 
                [size]="iconStyles.size.lg"
                [strokeWidth]="iconStyles.strokeWidth">
              </lucide-icon>
            </div>
            <h3 class="value-title">{{value.title}}</h3>
            <p class="value-description">{{value.description}}</p>
            <ul class="value-points">
              <li *ngFor="let point of value.points" class="point-item">
                <lucide-icon 
                  name="check" 
                  [size]="iconStyles.size.sm"
                  class="point-icon">
                </lucide-icon>
                <span>{{point}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-grid-pattern {
      background-image: 
        linear-gradient(rgba(31, 34, 81, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(31, 34, 81, 0.2) 1px, transparent 1px);
      background-size: 50px 50px;
    }

    .value-card {
      @apply bg-white p-8 rounded-2xl border border-gray-100
             hover:border-[#2AB24B]/20 transition-all duration-500
             hover:shadow-xl hover:shadow-[#2AB24B]/5
             transform hover:-translate-y-1;
      animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;

      &:nth-child(1) { animation-delay: 0.1s; }
      &:nth-child(2) { animation-delay: 0.2s; }
      &:nth-child(3) { animation-delay: 0.3s; }
    }

    .value-icon {
      @apply w-16 h-16 rounded-2xl mb-6
             bg-gradient-to-br from-[#2AB24B]/10 to-[#2AB24B]/5
             flex items-center justify-center
             group-hover:scale-110 transition-transform duration-500;

      lucide-icon {
        @apply text-[#2AB24B];
      }
    }

    .value-title {
      @apply text-xl font-bold text-[#1f2251] mb-4;
    }

    .value-description {
      @apply text-gray-600 mb-6;
    }

    .value-points {
      @apply space-y-3;
    }

    .point-item {
      @apply flex items-center gap-2 text-sm text-gray-600;
    }

    .point-icon {
      @apply text-[#2AB24B];
    }

    @keyframes fadeIn {
      from { 
        opacity: 0;
        transform: translateY(20px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class AboutValuesComponent {
  iconStyles = iconStyles;

  values = [
    {
      icon: 'lightbulb',
      title: 'Innovation',
      description: 'Pushing boundaries and embracing new technologies',
      points: [
        'Continuous learning',
        'Creative problem-solving',
        'Forward-thinking approach'
      ]
    },
    {
      icon: 'users',
      title: 'Collaboration',
      description: 'Working together to achieve exceptional results',
      points: [
        'Team synergy',
        'Open communication',
        'Shared success'
      ]
    },
    {
      icon: 'shield',
      title: 'Integrity',
      description: 'Maintaining the highest ethical standards',
      points: [
        'Transparent practices',
        'Honest relationships',
        'Reliable service'
      ]
    }
  ];
}