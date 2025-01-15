import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../shared/components/icons/icon.module';
import { iconStyles } from '../../shared/styles/icon.styles';

@Component({
  selector: 'app-client-card',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <div class="relative bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-500 hover:border-[#2AB24B]/20 hover:shadow-xl hover:shadow-[#2AB24B]/5 hover:-translate-y-1">
      <!-- Logo Section -->
      <div class="p-6 border-b border-gray-50">
        <div class="h-16 flex items-center justify-center">
          <img [src]="logo" [alt]="name" 
               class="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-110">
        </div>
      </div>

      <!-- Content -->
      <div class="p-6 space-y-4">
        <h3 class="text-xl font-bold text-[#1f2251] transition-colors duration-300 hover:text-[#2AB24B]">
          {{name}}
        </h3>
        <p class="text-sm text-[#2AB24B] font-medium">{{industry}}</p>
        <p class="text-sm text-gray-600 leading-relaxed">{{description}}</p>

        <!-- Success Metrics -->
        <div class="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-gray-50">
          <div *ngFor="let metric of metrics" 
               class="flex items-center gap-2 text-sm text-gray-600">
            <lucide-icon 
              [name]="metric.icon" 
              [size]="iconStyles.size.sm"
              class="text-[#2AB24B]">
            </lucide-icon>
            <span>{{metric.value}}</span>
          </div>
        </div>
      </div>

      <!-- Hover Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#1f2251]/90 to-[#1f2251]/90 flex items-center justify-center opacity-0 transition-all duration-500 translate-y-full hover:translate-y-0 hover:opacity-100">
        <a [href]="caseStudyUrl" 
           class="flex items-center gap-2 text-white font-medium px-6 py-3 rounded-lg bg-[#2AB24B] hover:bg-[#2AB24B]/90 transition-all duration-300">
          View Case Study
          <lucide-icon 
            name="arrow-right" 
            [size]="iconStyles.size.sm"
            class="transform transition-transform duration-300 hover:translate-x-1">
          </lucide-icon>
        </a>
      </div>
    </div>
  `
})
export class ClientCardComponent {
  @Input() logo!: string;
  @Input() name!: string;
  @Input() industry!: string;
  @Input() description!: string;
  @Input() metrics: Array<{icon: string, value: string}> = [];
  @Input() caseStudyUrl: string = '#';

  iconStyles = iconStyles;
}