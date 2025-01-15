import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-fill"></div>
      </div>
      <div class="progress-text">Loading<span class="dots">...</span></div>
    </div>
  `,
  styles: [`
    .progress-container {
      @apply flex flex-col items-center gap-2;
    }

    .progress-bar {
      @apply w-48 h-1 bg-white/10 rounded-full overflow-hidden;
    }

    .progress-fill {
      @apply h-full w-full bg-[#2AB24B] rounded-full;
      animation: progress 2s ease-in-out infinite;
      transform-origin: left;
    }

    .progress-text {
      @apply text-white/80 text-sm font-medium tracking-wider;
    }

    .dots {
      @apply inline-block;
      animation: dots 1.4s infinite;
    }

    @keyframes progress {
      0% { transform: scaleX(0); }
      50% { transform: scaleX(0.7); }
      100% { transform: scaleX(0); }
    }

    @keyframes dots {
      0%, 20% { content: '.'; }
      40% { content: '..'; }
      60% { content: '...'; }
      90%, 100% { content: ''; }
    }
  `]
})
export class LoadingProgressComponent {}