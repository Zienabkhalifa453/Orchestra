import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderConfig } from './loader.types';
import { loaderStyles } from './loader.styles';

@Component({
  selector: 'app-pulse-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="loaderStyles.sizes[size || 'md']" class="relative">
      <div class="pulse-ring"></div>
      <div class="pulse-core"></div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    .pulse-ring {
      @apply absolute inset-0 rounded-full opacity-75;
      border: 2px solid var(--loader-color);
      animation: pulse var(--animation-duration) cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
    }
    
    .pulse-core {
      @apply absolute left-1/2 top-1/2 w-1/3 h-1/3 rounded-full;
      background-color: var(--loader-color);
      transform: translate(-50%, -50%);
      animation: core-pulse var(--animation-duration) cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
    }
    
    @keyframes pulse {
      0% { transform: scale(0.8); opacity: 0.5; }
      50% { transform: scale(1.2); opacity: 0.8; }
      100% { transform: scale(0.8); opacity: 0.5; }
    }
    
    @keyframes core-pulse {
      0% { transform: translate(-50%, -50%) scale(1); }
      50% { transform: translate(-50%, -50%) scale(0.8); }
      100% { transform: translate(-50%, -50%) scale(1); }
    }
  `]
})
export class PulseLoaderComponent {
  @Input() size?: 'sm' | 'md' | 'lg' = 'md';
  @Input() color: string = loaderStyles.colors.primary;
  @Input() duration: number = loaderStyles.durations.normal;

  loaderStyles = loaderStyles;

  ngOnInit() {
    const host = document.querySelector('app-pulse-loader') as HTMLElement;
    if (host) {
      host.style.setProperty('--loader-color', this.color);
      host.style.setProperty('--animation-duration', `${this.duration}s`);
    }
  }
}