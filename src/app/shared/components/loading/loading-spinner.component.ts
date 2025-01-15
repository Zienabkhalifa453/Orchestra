import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="spinner-container">
      <div class="spinner">
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="dot"></div>
      </div>
    </div>
  `,
  styles: [`
    .spinner-container {
      @apply relative w-24 h-24;
    }

    .spinner {
      @apply w-full h-full relative;
      animation: spin 2s linear infinite;
    }

    .ring {
      @apply absolute w-full h-full border-4 border-transparent rounded-full;
      border-top-color: #2AB24B;
      animation: rotate 2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

      &:nth-child(1) { animation-delay: -0.45s; }
      &:nth-child(2) { animation-delay: -0.3s; }
      &:nth-child(3) { animation-delay: -0.15s; }
    }

    .dot {
      @apply absolute w-3 h-3 bg-[#2AB24B] rounded-full;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: pulse 1s ease-in-out infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes rotate {
      0% { transform: rotate(0); }
      100% { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(0.8); opacity: 0.8; }
      50% { transform: scale(1.2); opacity: 1; }
    }
  `]
})
export class LoadingSpinnerComponent {}