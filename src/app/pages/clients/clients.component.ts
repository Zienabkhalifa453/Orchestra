import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCardComponent } from './client-card.component';
import { IconModule } from '../../shared/components/icons/icon.module';
import { iconStyles } from '../../shared/styles/icon.styles';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, ClientCardComponent, IconModule],
  template: `
    <div class="min-h-screen pt-24">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="hero-title">Our Success Stories</h1>
            <p class="hero-subtitle">
              Discover how we've helped leading companies achieve their digital transformation goals
            </p>
            
            <!-- Trust Indicators -->
            <div class="trust-indicators">
              <div *ngFor="let indicator of trustIndicators" class="indicator">
                <lucide-icon 
                  [name]="indicator.icon" 
                  [size]="iconStyles.size.md"
                  [strokeWidth]="iconStyles.strokeWidth">
                </lucide-icon>
                <span>{{indicator.text}}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Background Elements -->
        <div class="hero-background">
          <div class="gradient-orb gradient-orb-1"></div>
          <div class="gradient-orb gradient-orb-2"></div>
          <div class="grid-pattern"></div>
        </div>
      </section>

      <!-- Clients Grid Section -->
      <section class="clients-section">
        <div class="container mx-auto px-4">
          <!-- Filter Tabs -->
          <div class="filter-tabs">
            <button *ngFor="let filter of filters"
                    (click)="activeFilter = filter"
                    [class.active]="activeFilter === filter"
                    class="filter-button">
              {{filter}}
            </button>
          </div>

          <!-- Clients Grid -->
          <div class="clients-grid">
            <app-client-card
              *ngFor="let client of filteredClients"
              [logo]="client.logo"
              [name]="client.name"
              [industry]="client.industry"
              [description]="client.description"
              [metrics]="client.metrics"
              [caseStudyUrl]="client.caseStudyUrl">
            </app-client-card>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .hero-section {
      @apply relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden;
    }

    .hero-title {
      @apply text-4xl md:text-5xl font-bold text-[#1f2251] mb-6;
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .hero-subtitle {
      @apply text-xl text-gray-600 mb-12;
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
    }

    .trust-indicators {
      @apply flex flex-wrap justify-center gap-8;
      animation: fadeIn 1s ease-out 0.4s backwards;
    }

    .indicator {
      @apply flex items-center gap-2 px-4 py-2
             bg-white rounded-full shadow-md
             border border-gray-100;

      lucide-icon {
        @apply text-[#2AB24B];
      }

      span {
        @apply text-sm text-gray-600 font-medium;
      }
    }

    .hero-background {
      @apply absolute inset-0 pointer-events-none;
    }

    .gradient-orb {
      @apply absolute rounded-full opacity-30 blur-3xl;
    }

    .gradient-orb-1 {
      @apply w-96 h-96 bg-[#2AB24B]/20 -top-48 -right-48;
    }

    .gradient-orb-2 {
      @apply w-96 h-96 bg-[#1f2251]/20 -bottom-48 -left-48;
    }

    .grid-pattern {
      @apply absolute inset-0 opacity-[0.015];
      background-image: 
        linear-gradient(rgba(31, 34, 81, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(31, 34, 81, 0.2) 1px, transparent 1px);
      background-size: 50px 50px;
    }

    .clients-section {
      @apply py-20;
    }

    .filter-tabs {
      @apply flex flex-wrap justify-center gap-4 mb-12;
    }

    .filter-button {
      @apply px-6 py-2 rounded-full text-sm font-medium
             transition-all duration-300
             hover:bg-[#2AB24B]/10 hover:text-[#2AB24B];

      &.active {
        @apply bg-[#2AB24B] text-white;
      }
    }

    .clients-grid {
      @apply grid md:grid-cols-3 gap-8 max-w-6xl mx-auto;
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
export class ClientsComponent {
  iconStyles = iconStyles;
  activeFilter: string = 'All';

  trustIndicators = [
    { icon: 'shield-check', text: 'Enterprise Security' },
    { icon: 'users', text: '500+ Clients' },
    { icon: 'award', text: '99% Success Rate' }
  ];

  filters = [
    'All',
    'Technology',
    'Finance',
    'Healthcare',
    'Manufacturing',
    'Retail'
  ];

  clients = [
    {
      logo: 'assets/images/clients/tech-corp.png',
      name: 'TechCorp Solutions',
      industry: 'Technology',
      description: 'Leading provider of enterprise software solutions, achieving 200% growth with our digital transformation.',
      metrics: [
        { icon: 'trending-up', value: '200% Growth' },
        { icon: 'clock', value: '50% Faster Delivery' }
      ],
      caseStudyUrl: '#'
    },
    {
      logo: 'assets/images/clients/global-finance.png',
      name: 'Global Finance',
      industry: 'Finance',
      description: 'International financial services company modernizing their infrastructure with cloud solutions.',
      metrics: [
        { icon: 'shield', value: '99.99% Uptime' },
        { icon: 'users', value: '2M+ Users' }
      ],
      caseStudyUrl: '#'
    },
    {
      logo: 'assets/images/clients/health-plus.png',
      name: 'HealthPlus',
      industry: 'Healthcare',
      description: 'Healthcare provider revolutionizing patient care through digital innovation.',
      metrics: [
        { icon: 'activity', value: '40% Better Care' },
        { icon: 'zap', value: '60% Faster Processing' }
      ],
      caseStudyUrl: '#'
    }
    // Add more clients as needed
  ];

  get filteredClients() {
    return this.activeFilter === 'All'
      ? this.clients
      : this.clients.filter(client => client.industry === this.activeFilter);
  }
}