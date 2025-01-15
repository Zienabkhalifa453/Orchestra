import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../../shared/components/icons/icon.module';
import { iconStyles } from '../../../shared/styles/icon.styles';

@Component({
  selector: 'app-about-mission',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <section class="relative py-20 overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Mission Content -->
          <div class="mission-content">
            <h2 class="text-3xl md:text-4xl font-bold text-[#1f2251] mb-6">
              Our Mission & Vision
            </h2>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              We're on a mission to transform businesses through innovative technology solutions, 
              enabling them to thrive in the digital age.
            </p>
            
            <div class="space-y-6">
              <div *ngFor="let point of missionPoints" class="flex items-start gap-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-[#2AB24B]/10 flex items-center justify-center">
                  <lucide-icon 
                    [name]="point.icon" 
                    [size]="iconStyles.size.md"
                    class="text-[#2AB24B]">
                  </lucide-icon>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-[#1f2251] mb-2">{{point.title}}</h3>
                  <p class="text-gray-600">{{point.description}}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Mission Image/Illustration -->
          <div class="mission-image relative">
            <div class="aspect-square rounded-2xl bg-gradient-to-br from-[#2AB24B]/10 to-[#1f2251]/10 p-8">
              <div class="w-full h-full rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 shadow-xl flex items-center justify-center">
                <div class="text-center">
                  <div class="mb-6">
                    <lucide-icon 
                      name="target" 
                      [size]="'48'"
                      class="text-[#2AB24B]">
                    </lucide-icon>
                  </div>
                  <h3 class="text-xl font-bold text-[#1f2251] mb-2">Driving Innovation</h3>
                  <p class="text-gray-600">Leading the future of technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .mission-content {
      animation: slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .mission-image {
      animation: fadeIn 1s ease-out 0.4s backwards;
    }

    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
  `]
})
export class AboutMissionComponent {
  iconStyles = iconStyles;

  missionPoints = [
    {
      icon: 'rocket',
      title: 'Innovation First',
      description: 'Continuously pushing boundaries to deliver cutting-edge solutions.'
    },
    {
      icon: 'users',
      title: 'Client Success',
      description: 'Dedicated to helping our clients achieve their business goals.'
    },
    {
      icon: 'shield',
      title: 'Trust & Security',
      description: 'Maintaining the highest standards of security and reliability.'
    }
  ];
}