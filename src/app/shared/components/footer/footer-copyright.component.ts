import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-copyright',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border-t border-white/10 pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
        <p>© {{currentYear}} OrchestraSys. All rights reserved.</p>
        <div class="flex gap-6">
          <a *ngFor="let link of links"
             [href]="link.url"
             class="hover:text-[#2AB24B] transition-colors">
            {{link.label}}
          </a>
        </div>
      </div>
    </div>
  `
})
export class FooterCopyrightComponent {
  currentYear = new Date().getFullYear();
  
  links = [
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms of Service', url: '/terms' },
    { label: 'Cookie Policy', url: '/cookies' }
  ];
}