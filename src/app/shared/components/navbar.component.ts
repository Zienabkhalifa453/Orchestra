import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav [class.scrolled]="isScrolled" class="fixed w-full z-50 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-20">
          <div class="flex-shrink-0">
            <a routerLink="/" class="text-2xl font-bold text-[#1f2251] flex items-center gap-2">
              <span class="text-[#2AB24B]">Orchestra</span>Sys
            </a>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a *ngFor="let item of menuItems" 
               [routerLink]="item.path"
               routerLinkActive="text-[#2AB24B]"
               [routerLinkActiveOptions]="{exact: item.exact}"
               class="nav-link relative text-[#1f2251] hover:text-[#2AB24B] transition-colors">
              {{item.label}}
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button (click)="toggleMobile()" class="md:hidden text-[#1f2251]">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path *ngIf="!isMobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path *ngIf="isMobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div *ngIf="isMobileOpen" class="md:hidden py-4">
          <div class="flex flex-col space-y-4">
            <a *ngFor="let item of menuItems"
               [routerLink]="item.path"
               routerLinkActive="text-[#2AB24B]"
               [routerLinkActiveOptions]="{exact: item.exact}"
               (click)="toggleMobile()"
               class="text-[#1f2251] hover:text-[#2AB24B] transition-colors py-2">
              {{item.label}}
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    :host {
      nav {
        @apply bg-white/90 backdrop-blur-sm;
        &.scrolled {
          @apply shadow-lg bg-white/95;
        }
      }
      .nav-link::after {
        content: '';
        @apply absolute bottom-0 left-0 w-0 h-0.5 bg-[#2AB24B] transition-all duration-300;
      }
      .nav-link:hover::after {
        @apply w-full;
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  isMobileOpen = false;

  menuItems = [
    { path: '/', label: 'Home', exact: true },
    { path: '/products', label: 'Products', exact: false },
    { path: '/clients', label: 'Clients', exact: false },
    { path: '/about', label: 'About', exact: false },
    { path: '/contact', label: 'Contact', exact: false }
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobile() {
    this.isMobileOpen = !this.isMobileOpen;
  }
}