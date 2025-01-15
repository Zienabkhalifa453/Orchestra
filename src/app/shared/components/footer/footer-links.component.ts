import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-links',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="grid grid-cols-2 gap-8">
      <div>
        <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
        <ul class="space-y-3">
          <li *ngFor="let link of quickLinks">
            <a [routerLink]="link.path" 
               class="text-gray-300 hover:text-[#2AB24B] transition-colors">
              {{link.label}}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="text-lg font-semibold mb-6">Solutions</h4>
        <ul class="space-y-3">
          <li *ngFor="let solution of solutions">
            <a [routerLink]="solution.path" 
               class="text-gray-300 hover:text-[#2AB24B] transition-colors">
              {{solution.label}}
            </a>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class FooterLinksComponent {
  quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' }
  ];

  solutions = [
    { path: '/products', label: 'Enterprise Solutions' },
    { path: '/products', label: 'Cloud Services' },
    { path: '/products', label: 'Data Analytics' },
    { path: '/products', label: 'Security' }
  ];
}