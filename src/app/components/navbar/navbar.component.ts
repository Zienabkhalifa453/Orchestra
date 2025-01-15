import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="bg-white shadow-lg fixed w-full z-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-20">
          <div class="flex-shrink-0">
            <a routerLink="/" class="text-2xl font-bold text-[#1f2251]">
              OrchestraSys
            </a>
          </div>
          
          <div class="hidden md:flex space-x-8">
            <a routerLink="/" 
               routerLinkActive="text-[#2AB24B]"
               [routerLinkActiveOptions]="{exact: true}"
               class="text-[#1f2251] hover:text-[#2AB24B] transition-colors">
              Home
            </a>
            <a routerLink="/products" 
               routerLinkActive="text-[#2AB24B]"
               class="text-[#1f2251] hover:text-[#2AB24B] transition-colors">
              Our Products
            </a>
            <a routerLink="/clients" 
               routerLinkActive="text-[#2AB24B]"
               class="text-[#1f2251] hover:text-[#2AB24B] transition-colors">
              Our Clients
            </a>
            <a routerLink="/about" 
               routerLinkActive="text-[#2AB24B]"
               class="text-[#1f2251] hover:text-[#2AB24B] transition-colors">
              About Us
            </a>
            <a routerLink="/contact" 
               routerLinkActive="text-[#2AB24B]"
               class="text-[#2AB24B] hover:text-[#1f2251] transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {}