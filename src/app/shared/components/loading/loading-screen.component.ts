import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaveLoaderComponent } from './wave-loader.component';
import { LOADER_CONSTANTS } from './loader.constants';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [CommonModule, WaveLoaderComponent],
  template: `
    <div class="loading-screen">
      <div class="content">
        <div class="logo">
          <div class="logo-text">
            <span class="text-[#2AB24B] font-bold text-4xl">Orchestra</span>
            <span class="text-white font-bold text-4xl">Sys</span>
          </div>
          <div class="logo-line"></div>
        </div>
        
        <app-wave-loader
          size="md"
          [color]="LOADER_CONSTANTS.colors.primary"
          [duration]="LOADER_CONSTANTS.durations.normal">
        </app-wave-loader>
        
        <div class="status">
          <span class="status-text text-[#2AB24B] font-semibold">Loading</span>
          <span class="status-dots text-[#2AB24B]"></span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .loading-screen {
      @apply fixed inset-0 flex items-center justify-center z-50;
      background: radial-gradient(circle at center, #1f2251 0%, #151937 100%);
      backdrop-filter: blur(10px);
    }
    
    .content {
      @apply flex flex-col items-center gap-12;
      animation: fadeIn 0.5s ease-out;
    }

    .logo {
      @apply flex flex-col items-center gap-4;
      
      .logo-text {
        @apply flex items-center gap-2;
        animation: slideDown 0.5s ease-out;
      }
      
      .logo-line {
        @apply h-px w-0 bg-gradient-to-r from-transparent via-[#2AB24B] to-transparent;
        animation: expandLine 0.8s ease-out forwards 0.5s;
      }
    }
    
    .status {
      @apply flex items-center justify-center text-lg font-medium;
      
      .status-text {
        @apply mr-1;
      }
      
      .status-dots {
        @apply inline-block w-4;
        animation: dots 1.4s infinite steps(4, end);
      }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideDown {
      from { transform: translateY(-20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes expandLine {
      from { width: 0; }
      to { width: 100%; }
    }
    
    @keyframes dots {
      0%, 20% { content: '.'; }
      40% { content: '..'; }
      60% { content: '...'; }
      80%, 100% { content: ''; }
    }
  `]
})
export class LoadingScreenComponent {
  LOADER_CONSTANTS = LOADER_CONSTANTS;
}