import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionCardComponent } from './mission-card.component';

@Component({
  selector: 'app-mission-section',
  standalone: true,
  imports: [CommonModule, MissionCardComponent],
  template: `
    <section class="mission-section">
      <div class="container mx-auto px-4 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="section-title">Our Mission & Vision</h2>
          <p class="section-subtitle">
            Driving innovation and excellence in enterprise technology
          </p>
        </div>

        <!-- Mission Cards -->
        <div class="cards-grid">
          <app-mission-card
            *ngFor="let card of missionCards; let i = index"
            [icon]="card.icon"
            [title]="card.title"
            [description]="card.description"
            [points]="card.points"
            [attr.data-aos-delay]="i * 100">
          </app-mission-card>
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
    .mission-section {
      position: relative;
      padding: 6rem 0;
      background: linear-gradient(to bottom, #f8fafc, white);
      overflow: hidden;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1f2251;
      margin-bottom: 1rem;
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .section-subtitle {
      font-size: 1.125rem;
      color: #64748b;
      max-width: 32rem;
      margin: 0 auto;
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 72rem;
      margin: 0 auto;
    }

    .background-elements {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .gradient-orb {
      position: absolute;
      border-radius: 9999px;
      opacity: 0.5;
      filter: blur(100px);
    }

    .gradient-orb-1 {
      width: 30rem;
      height: 30rem;
      background: #2AB24B20;
      top: -10rem;
      right: -10rem;
      animation: float 20s infinite;
    }

    .gradient-orb-2 {
      width: 25rem;
      height: 25rem;
      background: #1f225120;
      bottom: -8rem;
      left: -8rem;
      animation: float 25s infinite reverse;
    }

    .grid-pattern {
      position: absolute;
      inset: 0;
      opacity: 0.02;
      background-image: 
        linear-gradient(rgba(31, 34, 81, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(31, 34, 81, 0.2) 1px, transparent 1px);
      background-size: 50px 50px;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(2%, 2%) rotate(5deg); }
      50% { transform: translate(-2%, 4%) rotate(-5deg); }
      75% { transform: translate(1%, -2%) rotate(3deg); }
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class MissionSectionComponent {
  missionCards = [
    {
      icon: 'target',
      title: 'Our Mission',
      description: 'To empower businesses through innovative technology solutions that drive growth and success.',
      points: [
        'Customer-centric approach',
        'Innovative solutions',
        'Sustainable growth'
      ]
    },
    {
      icon: 'eye',
      title: 'Our Vision',
      description: 'To be the global leader in enterprise technology solutions, setting new standards for innovation.',
      points: [
        'Global impact',
        'Industry leadership',
        'Continuous innovation'
      ]
    },
    {
      icon: 'heart',
      title: 'Our Values',
      description: 'Built on a foundation of integrity, innovation, and excellence in everything we do.',
      points: [
        'Professional excellence',
        'Ethical practices',
        'Team collaboration'
      ]
    }
  ];
}