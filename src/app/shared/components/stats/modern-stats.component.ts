import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icons/icon.module';
import { iconStyles } from '../../styles/icon.styles';

@Component({
  selector: 'app-modern-stats',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <section class="stats-section">
      <!-- Background Elements -->
      <div class="background-elements">
        <div class="gradient-orb gradient-orb-1"></div>
        <div class="gradient-orb gradient-orb-2"></div>
        <div class="grid-pattern"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="section-title">Our Impact in Numbers</h2>
          <p class="section-subtitle">Delivering exceptional results for businesses worldwide</p>
        </div>

        <!-- Stats Grid -->
        <div class="stats-grid">
          <div *ngFor="let stat of stats; let i = index" 
               class="stat-card group"
               [style.animation-delay]="i * 0.1 + 's'">
            <div class="stat-icon">
              <lucide-icon 
                [name]="stat.icon" 
                [size]="iconStyles.size.lg"
                [strokeWidth]="iconStyles.strokeWidth">
              </lucide-icon>
            </div>
            <div class="stat-content">
              <div class="stat-value">
                <span class="number">{{stat.value}}</span>
                <span class="suffix">{{stat.suffix}}</span>
              </div>
              <p class="stat-label">{{stat.label}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .stats-section {
      @apply relative py-24 bg-[#1f2251] overflow-hidden;
    }

    .section-title {
      @apply text-4xl font-bold text-white mb-4;
      animation: fadeIn 0.8s ease-out;
    }

    .section-subtitle {
      @apply text-lg text-white/80;
      animation: fadeIn 0.8s ease-out 0.2s backwards;
    }

    .stats-grid {
      @apply grid md:grid-cols-4 gap-8 max-w-6xl mx-auto;
    }

    .stat-card {
      @apply bg-white/5 backdrop-blur-sm rounded-2xl p-6
             border border-white/10 relative overflow-hidden
             hover:border-[#2AB24B]/30 transition-all duration-500
             hover:-translate-y-1;
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;
    }

    .stat-card::before {
      content: '';
      @apply absolute inset-0 bg-gradient-to-br
             from-white/5 to-transparent opacity-0
             transition-opacity duration-500;
    }

    .stat-card:hover::before {
      @apply opacity-100;
    }

    .stat-icon {
      @apply w-12 h-12 rounded-xl mb-4
             bg-[#2AB24B]/20 flex items-center justify-center
             group-hover:scale-110 transition-transform duration-500;

      lucide-icon {
        @apply text-[#2AB24B] transform transition-transform duration-500
               group-hover:rotate-12;
      }
    }

    .stat-content {
      @apply relative z-10;
    }

    .stat-value {
      @apply flex items-baseline gap-1 mb-2;
    }

    .number {
      @apply text-3xl font-bold text-white;
      animation: countUp 2s ease-out forwards;
    }

    .suffix {
      @apply text-xl font-bold text-[#2AB24B];
    }

    .stat-label {
      @apply text-white/70 text-sm;
    }

    .background-elements {
      @apply absolute inset-0 pointer-events-none;
    }

    .gradient-orb {
      @apply absolute rounded-full opacity-30 blur-3xl;
      animation: float 20s infinite;
    }

    .gradient-orb-1 {
      @apply w-[600px] h-[600px] bg-[#2AB24B]/20 -top-1/4 -left-1/4;
    }

    .gradient-orb-2 {
      @apply w-[500px] h-[500px] bg-[#2AB24B]/15 bottom-0 right-0;
      animation-delay: -10s;
    }

    .grid-pattern {
      @apply absolute inset-0 opacity-[0.03];
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
      background-size: 50px 50px;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(2%, 2%) rotate(5deg); }
      50% { transform: translate(-2%, 4%) rotate(-5deg); }
      75% { transform: translate(1%, -2%) rotate(3deg); }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes countUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ModernStatsComponent {
  iconStyles = iconStyles;

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