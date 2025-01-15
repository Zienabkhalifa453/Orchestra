import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../../../shared/components/icons/icon.module';
import { iconStyles } from '../../../../shared/styles/icon.styles';

@Component({
  selector: 'app-history-timeline',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <section class="history-section">
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="section-title">Our Journey</h2>
          <p class="section-subtitle">A decade of innovation and excellence</p>
        </div>

        <div class="timeline">
          <div *ngFor="let event of timeline; let i = index" 
               class="timeline-event"
               [class.even]="i % 2 === 0">
            <div class="event-content">
              <div class="year">{{event.year}}</div>
              <div class="event-card">
                <div class="icon-wrapper">
                  <lucide-icon 
                    [name]="event.icon" 
                    [size]="iconStyles.size.lg"
                    [strokeWidth]="iconStyles.strokeWidth">
                  </lucide-icon>
                </div>
                <h3 class="event-title">{{event.title}}</h3>
                <p class="event-description">{{event.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Background Elements -->
      <div class="background-elements">
        <div class="gradient-orb gradient-orb-1"></div>
        <div class="gradient-orb gradient-orb-2"></div>
      </div>
    </section>
  `,
  styles: [`
    .history-section {
      position: relative;
      padding: 5rem 0;
      background: #1f2251;
      overflow: hidden;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: white;
      margin-bottom: 1rem;
      animation: fadeIn 0.8s ease-out;
    }

    .section-subtitle {
      font-size: 1.125rem;
      color: rgba(255, 255, 255, 0.8);
      animation: fadeIn 0.8s ease-out 0.2s backwards;
    }

    .timeline {
      position: relative;
      max-width: 48rem;
      margin: 4rem auto 0;
      padding: 2rem 0;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(to bottom, 
        transparent,
        rgba(42, 178, 75, 0.3) 15%,
        rgba(42, 178, 75, 0.3) 85%,
        transparent
      );
      transform: translateX(-50%);
    }

    .timeline-event {
      position: relative;
      margin-bottom: 4rem;
      opacity: 0;
      animation: slideIn 0.8s ease-out forwards;
    }

    .timeline-event:last-child {
      margin-bottom: 0;
    }

    .event-content {
      width: 100%;
      padding-left: 50%;
      padding-right: 2rem;
    }

    .timeline-event.even .event-content {
      padding-left: 2rem;
      padding-right: 50%;
    }

    .year {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background: #2AB24B;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 0.875rem;
      white-space: nowrap;
    }

    .event-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(8px);
      border-radius: 1rem;
      padding: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s;
    }

    .event-card:hover {
      border-color: rgba(42, 178, 75, 0.3);
      transform: translateY(-0.25rem);
    }

    .icon-wrapper {
      width: 3rem;
      height: 3rem;
      border-radius: 0.75rem;
      background: rgba(42, 178, 75, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
    }

    .icon-wrapper lucide-icon {
      color: #2AB24B;
    }

    .event-title {
      color: white;
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .event-description {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.875rem;
      line-height: 1.6;
    }

    .background-elements {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .gradient-orb {
      position: absolute;
      border-radius: 9999px;
      opacity: 0.2;
      filter: blur(100px);
    }

    .gradient-orb-1 {
      width: 30rem;
      height: 30rem;
      background: #2AB24B;
      top: -10rem;
      right: -10rem;
    }

    .gradient-orb-2 {
      width: 25rem;
      height: 25rem;
      background: #2AB24B;
      bottom: -8rem;
      left: -8rem;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideIn {
      0% { 
        opacity: 0;
        transform: translateX(-30px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `]
})
export class HistoryTimelineComponent {
  iconStyles = iconStyles;

  timeline = [
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