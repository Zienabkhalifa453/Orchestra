import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from './stat-card.component';

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [CommonModule, StatCardComponent],
  template: `
    <section class="stats-section">
      <!-- Background Elements -->
      <div class="background-elements">
        <div class="gradient-orb gradient-orb-1"></div>
        <div class="gradient-orb gradient-orb-2"></div>
        <div class="gradient-orb gradient-orb-3"></div>
        <div class="grid-pattern"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="section-title">Our Impact in Numbers</h2>
          <p class="section-subtitle">
            Delivering exceptional results for businesses worldwide
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="stats-grid">
          <app-stat-card
            *ngFor="let stat of stats; let i = index"
            [icon]="stat.icon"
            [value]="stat.value"
            [suffix]="stat.suffix"
            [label]="stat.label"
            [attr.data-aos-delay]="i * 100">
          </app-stat-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .stats-section {
      @apply relative py-24 bg-[#1f2251] overflow-hidden;
    }

    .section-title {
      @apply text-4xl md:text-5xl font-bold text-white mb-6;
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .section-subtitle {
      @apply text-lg text-white/80 max-w-2xl mx-auto;
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
    }

    .stats-grid {
      @apply grid md:grid-cols-4 gap-8 max-w-6xl mx-auto;
      animation: fadeIn 1s ease-out 0.4s backwards;
    }

    .background-elements {
      @apply absolute inset-0 pointer-events-none overflow-hidden;
    }

    .gradient-orb {
      @apply absolute rounded-full blur-3xl;
      animation: float 20s infinite;
    }

    .gradient-orb-1 {
      @apply w-[600px] h-[600px] bg-[#2AB24B]/20 -top-1/4 -left-1/4;
      animation-delay: 0s;
    }

    .gradient-orb-2 {
      @apply w-[500px] h-[500px] bg-[#2AB24B]/15 bottom-0 right-0;
      animation-delay: -7s;
    }

    .gradient-orb-3 {
      @apply w-[400px] h-[400px] bg-[#2AB24B]/10 top-1/2 left-1/2;
      animation-delay: -14s;
    }

    .grid-pattern {
      @apply absolute inset-0 opacity-[0.03];
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
      background-size: 50px 50px;
      animation: pulse 15s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { 
        transform: translate(0, 0) rotate(0deg); 
      }
      25% { 
        transform: translate(2%, 2%) rotate(5deg); 
      }
      50% { 
        transform: translate(-2%, 4%) rotate(-5deg); 
      }
      75% { 
        transform: translate(1%, -2%) rotate(3deg); 
      }
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.03; }
      50% { opacity: 0.05; }
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
export class StatsSectionComponent {
  stats = [
    {
      icon: 'users',
      value: '500',
      suffix: '+',
      label: 'Happy Clients'
    },
    {
      icon: 'briefcase',
      value: '1000',
      suffix: '+',
      label: 'Projects Completed'
    },
    {
      icon: 'award',
      value: '15',
      suffix: '+',
      label: 'Years Experience'
    },
    {
      icon: 'globe',
      value: '50',
      suffix: '+',
      label: 'Countries Served'
    }
  ];
}