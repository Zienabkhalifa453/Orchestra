import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LOADER_CONSTANTS } from './loader.constants';

@Component({
  selector: 'app-wave-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="LOADER_CONSTANTS.sizes[size].container" class="flex items-center justify-center gap-2">
      <div *ngFor="let i of [1,2,3,4,5]" 
           [class]="LOADER_CONSTANTS.sizes[size].element"
           class="wave-dot rounded-full"
           [style.animation-delay]="(i - 1) * 0.15 + 's'">
      </div>
    </div>
  `,
  styles: [`
    .wave-dot {
      background: var(--loader-color);
      animation: wave var(--animation-duration) ease-in-out infinite;
    }

    @keyframes wave {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-200%); }
    }
  `]
})
export class WaveLoaderComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() color = LOADER_CONSTANTS.colors.primary;
  @Input() duration = LOADER_CONSTANTS.durations.normal;

  LOADER_CONSTANTS = LOADER_CONSTANTS;

  ngOnInit() {
    const host = document.querySelector('app-wave-loader') as HTMLElement;
    if (host) {
      host.style.setProperty('--loader-color', this.color);
      host.style.setProperty('--animation-duration', `${this.duration}s`);
    }
  }
}