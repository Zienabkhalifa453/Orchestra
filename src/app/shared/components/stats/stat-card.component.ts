import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icons/icon.module';
import { StatCounterComponent } from './stat-counter.component';
import { iconStyles } from '../../styles/icon.styles';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule, IconModule, StatCounterComponent],
  template: `
    <div class="relative p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 transition-all duration-500 hover:border-[#2AB24B]/30 hover:-translate-y-1 overflow-hidden">
      <!-- Icon -->
      <div class="w-14 h-14 rounded-xl mb-6 bg-gradient-to-br from-[#2AB24B]/20 to-[#2AB24B]/5 flex items-center justify-center transition-all duration-500 hover:scale-110">
        <lucide-icon 
          [name]="icon" 
          [size]="iconStyles.size.lg"
          [strokeWidth]="iconStyles.strokeWidth"
          class="text-[#2AB24B] transform transition-all duration-500 hover:rotate-12">
        </lucide-icon>
      </div>
      
      <!-- Content -->
      <div class="relative z-10">
        <div class="flex items-baseline gap-2 mb-2">
          <app-stat-counter [value]="numericValue"></app-stat-counter>
          <span class="text-2xl font-bold text-[#2AB24B]">{{suffix}}</span>
        </div>
        <p class="text-white/70 text-sm font-medium tracking-wide">{{label}}</p>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 hover:via-[#2AB24B]/30"></div>
      <div class="absolute -inset-px opacity-0 bg-gradient-to-r from-[#2AB24B]/0 via-[#2AB24B]/10 to-[#2AB24B]/0 blur-xl transition-all duration-1000 hover:opacity-100"></div>
    </div>
  `
})
export class StatCardComponent {
  @Input() icon!: string;
  @Input() value!: string;
  @Input() suffix: string = '';
  @Input() label!: string;

  iconStyles = iconStyles;

  get numericValue(): number {
    return parseInt(this.value, 10);
  }
}