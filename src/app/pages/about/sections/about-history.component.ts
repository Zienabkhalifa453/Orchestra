import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../../shared/components/icons/icon.module';
import { iconStyles } from '../../../shared/styles/icon.styles';

@Component({
  selector: 'app-about-history',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <section class="relative py-16 bg-[#1f2251] overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-64 h-64 bg-[#2AB24B]/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-[#2AB24B]/20 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white mb-4 animate-fade-in">Our Journey</h2>
          <p class="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-delay">
            A decade of innovation and growth
          </p>
        </div>

        <!-- Timeline -->
        <div class="timeline max-w-4xl mx-auto">
          <div *ngFor="let milestone of milestones; let i = index" 
               class="milestone-item"
               [class.milestone-right]="i % 2 === 0"
               [style.animation-delay]="i * 0.2 + 's'">
            <div class="milestone-content">
              <div class="milestone-year">{{milestone.year}}</div>
              <div class="milestone-card">
                <div class="milestone-icon">
                  <lucide-icon 
                    [name]="milestone.icon" 
                    [size]="iconStyles.size.lg"
                    [strokeWidth]="iconStyles.strokeWidth">
                  </lucide-icon>
                </div>
                <h3 class="milestone-title">{{milestone.title}}</h3>
                <p class="milestone-description">{{milestone.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline {
      position: relative;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 1px;
      background: rgba(255, 255, 255, 0.2);
      transform: scaleX(0);
      animation: scaleIn 0.5s ease-out forwards;
    }

    .milestone-item {
      position: relative;
      display: flex;
      justify-content: flex-start;
      width: 100%;
      margin-bottom: 2rem;
      opacity: 0;
      animation: slideIn 0.6s ease-out forwards;
    }

    .milestone-right {
      justify-content: flex-end;
    }

    .milestone-content {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .milestone-right .milestone-content {
      align-items: flex-end;
    }

    .milestone-year {
      font-size: 1.5rem;
      font-weight: bold;
      color: #2AB24B;
      transform: translateX(50%);
    }

    .milestone-right .milestone-year {
      transform: translateX(-50%);
    }

    .milestone-card {
      width: 100%;
      max-width: 20rem;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(8px);
      border-radius: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transform: translateX(1rem);
      transition: all 0.3s ease;
    }

    .milestone-right .milestone-card {
      transform: translateX(-1rem);
    }

    .milestone-card:hover {
      border-color: rgba(42, 178, 75, 0.3);
      transform: translateX(0);
    }

    .milestone-icon {
      width: 3rem;
      height: 3rem;
      border-radius: 0.75rem;
      background: rgba(42, 178, 75, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .milestone-icon lucide-icon {
      color: #2AB24B;
    }

    .milestone-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: white;
    }

    .milestone-description {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.875rem;
      line-height: 1.5;
    }

    @keyframes scaleIn {
      from { transform: scaleX(0); }
      to { transform: scaleX(1); }
    }

    @keyframes slideIn {
      from { 
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .animate-fade-in {
      animation: fadeIn 0.8s ease-out forwards;
    }

    .animate-fade-in-delay {
      animation: fadeIn 0.8s ease-out 0.2s forwards;
      opacity: 0;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class AboutHistoryComponent {
  iconStyles = iconStyles;

  milestones = [
    {
      year: '2008',
      icon: 'flag',
      title: 'Company Founded',
      description: 'Started with a vision to transform enterprise solutions.'
    },
    {
      year: '2015',
      icon: 'globe',
      title: 'Global Expansion',
      description: 'Opened offices in Europe and Asia, serving clients worldwide.'
    },
    {
      year: '2023',
      icon: 'trending-up',
      title: 'Industry Leader',
      description: 'Recognized as a leading provider of enterprise solutions.'
    }
  ];
}