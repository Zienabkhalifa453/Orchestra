import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../../shared/components/icons/icon.module';
import { iconStyles } from '../../../shared/styles/icon.styles';

@Component({
  selector: 'app-about-team',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <section class="relative py-20 overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-[#1f2251] mb-4">Our Leadership Team</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experts leading our innovation and growth
          </p>
        </div>

        <!-- Team Grid -->
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div *ngFor="let member of team; let i = index" 
               class="team-card group">
            <!-- Image -->
            <div class="relative mb-6">
              <div class="aspect-square rounded-2xl overflow-hidden">
                <img [src]="member.image" [alt]="member.name" 
                     class="w-full h-full object-cover">
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#1f2251]/80 to-transparent rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>

            <!-- Info -->
            <h3 class="text-xl font-bold text-[#1f2251] mb-1">{{member.name}}</h3>
            <p class="text-[#2AB24B] font-medium mb-4">{{member.role}}</p>
            <p class="text-gray-600 text-sm mb-6">{{member.bio}}</p>

            <!-- Social Links -->
            <div class="flex gap-3">
              <a *ngFor="let social of member.socials"
                 [href]="social.url"
                 class="social-link group"
                 target="_blank"
                 rel="noopener noreferrer">
                <lucide-icon 
                  [name]="social.icon" 
                  [size]="iconStyles.size.sm"
                  [strokeWidth]="iconStyles.strokeWidth">
                </lucide-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .team-card {
      background: white;
      padding: 1.5rem;
      border-radius: 1rem;
      border: 1px solid #f3f4f6;
      transition: all 0.5s;
      transform: translateY(0);
    }

    .team-card:hover {
      border-color: rgba(42, 178, 75, 0.2);
      box-shadow: 0 20px 25px -5px rgba(42, 178, 75, 0.05);
      transform: translateY(-0.25rem);
    }

    .team-card:nth-child(1) { animation-delay: 0.1s; }
    .team-card:nth-child(2) { animation-delay: 0.2s; }
    .team-card:nth-child(3) { animation-delay: 0.3s; }

    .social-link {
      padding: 0.5rem;
      border-radius: 0.5rem;
      background: #f9fafb;
      transition: all 0.3s;
    }

    .social-link:hover {
      background: #2AB24B;
    }

    .social-link lucide-icon {
      color: #9ca3af;
      transition: color 0.3s;
    }

    .social-link:hover lucide-icon {
      color: white;
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

    .team-card {
      animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;
    }
  `]
})
export class AboutTeamComponent {
  iconStyles = iconStyles;

  team = [
    {
      name: 'John Anderson',
      role: 'CEO & Co-Founder',
      bio: 'Visionary leader with 15+ years of experience in enterprise technology solutions.',
      image: 'assets/images/team/john.jpg',
      socials: [
        { icon: 'linkedin', url: 'https://linkedin.com' },
        { icon: 'twitter', url: 'https://twitter.com' }
      ]
    },
    {
      name: 'Sarah Mitchell',
      role: 'CTO',
      bio: 'Technology innovator specializing in cloud architecture and AI solutions.',
      image: 'assets/images/team/sarah.jpg',
      socials: [
        { icon: 'linkedin', url: 'https://linkedin.com' },
        { icon: 'github', url: 'https://github.com' }
      ]
    },
    {
      name: 'Michael Chen',
      role: 'COO',
      bio: 'Operations expert focused on scaling technology companies globally.',
      image: 'assets/images/team/michael.jpg',
      socials: [
        { icon: 'linkedin', url: 'https://linkedin.com' },
        { icon: 'twitter', url: 'https://twitter.com' }
      ]
    }
  ];
}