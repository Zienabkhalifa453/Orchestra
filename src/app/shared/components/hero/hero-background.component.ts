import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="absolute inset-0 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <!-- Animated Gradient Orbs -->
      <div class="orbs-container">
        <div class="orb orb-primary"></div>
        <div class="orb orb-secondary"></div>
        <div class="orb orb-accent"></div>
      </div>
      
      <!-- Animated Grid Pattern -->
      <div class="grid-pattern"></div>
      
      <!-- Geometric Shapes -->
      <div class="shapes-container">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
      
      <!-- Glass Panels -->
      <div class="glass-panels">
        <div class="panel panel-1"></div>
        <div class="panel panel-2"></div>
      </div>
      
      <!-- Gradient Overlay -->
      <div class="overlay"></div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
    }

    .orbs-container {
      @apply absolute inset-0 overflow-hidden;
    }

    .orb {
      @apply absolute rounded-full blur-3xl opacity-20;
      animation: float 20s ease-in-out infinite;
    }

    .orb-primary {
      @apply w-[500px] h-[500px];
      background: radial-gradient(circle at center, #2AB24B, transparent 70%);
      top: -10%;
      left: -5%;
      animation-delay: 0s;
    }

    .orb-secondary {
      @apply w-[600px] h-[600px];
      background: radial-gradient(circle at center, #1f2251, transparent 70%);
      bottom: -20%;
      right: -10%;
      animation-delay: -7s;
    }

    .orb-accent {
      @apply w-[400px] h-[400px];
      background: radial-gradient(circle at center, #34d95e, transparent 70%);
      top: 40%;
      left: 60%;
      animation-delay: -14s;
    }

    .grid-pattern {
      @apply absolute inset-0;
      background-image: 
        linear-gradient(rgba(31, 34, 81, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(31, 34, 81, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
      animation: pulse 15s ease-in-out infinite;
    }

    .shapes-container {
      @apply absolute inset-0 overflow-hidden;
    }

    .shape {
      @apply absolute bg-white/10 backdrop-blur-lg;
      animation: rotate 30s linear infinite;
    }

    .shape-1 {
      @apply w-64 h-64 rounded-3xl;
      top: 10%;
      left: 15%;
      transform-origin: center;
      animation-delay: -5s;
    }

    .shape-2 {
      @apply w-48 h-48 rounded-full;
      top: 60%;
      right: 10%;
      animation-delay: -10s;
    }

    .shape-3 {
      @apply w-56 h-56 rounded-2xl;
      bottom: 15%;
      left: 25%;
      animation-delay: -15s;
    }

    .glass-panels {
      @apply absolute inset-0;
    }

    .panel {
      @apply absolute bg-white/5 backdrop-blur-sm;
      animation: tilt 20s ease-in-out infinite;
    }

    .panel-1 {
      @apply w-full h-1/2 -skew-y-6 origin-left;
      top: -10%;
    }

    .panel-2 {
      @apply w-full h-1/2 skew-y-6 origin-right;
      bottom: -10%;
    }

    .overlay {
      @apply absolute inset-0;
      background: linear-gradient(
        to bottom,
        transparent,
        rgba(255, 255, 255, 0.5) 30%,
        rgba(255, 255, 255, 0.8) 60%,
        white
      );
    }

    @keyframes float {
      0%, 100% { 
        transform: translate(0, 0) rotate(0deg) scale(1); 
      }
      25% { 
        transform: translate(2%, 2%) rotate(5deg) scale(1.05); 
      }
      50% { 
        transform: translate(-2%, 4%) rotate(-5deg) scale(0.95); 
      }
      75% { 
        transform: translate(1%, -2%) rotate(3deg) scale(1.02); 
      }
    }

    @keyframes pulse {
      0%, 100% { 
        opacity: 0.3;
        transform: scale(1);
      }
      50% { 
        opacity: 0.4;
        transform: scale(1.05);
      }
    }

    @keyframes rotate {
      0% { 
        transform: rotate(0deg) translateY(0);
      }
      50% {
        transform: rotate(180deg) translateY(20px);
      }
      100% { 
        transform: rotate(360deg) translateY(0);
      }
    }

    @keyframes tilt {
      0%, 100% {
        transform: skewY(6deg) translateY(0);
      }
      50% {
        transform: skewY(6deg) translateY(20px);
      }
    }
  `]
})
export class HeroBackgroundComponent {}