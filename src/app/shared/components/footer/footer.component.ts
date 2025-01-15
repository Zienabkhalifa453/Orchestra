import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterLinksComponent } from './footer-links.component';
import { FooterSocialComponent } from './footer-social.component';
import { FooterNewsletterComponent } from './footer-newsletter.component';
import { FooterCopyrightComponent } from './footer-copyright.component';
import { FooterContactComponent } from './footer-contact.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    FooterLinksComponent,
    FooterSocialComponent,
    FooterNewsletterComponent,
    FooterCopyrightComponent,
    FooterContactComponent
  ],
  template: `
    <footer class="footer-wrapper">
      <div class="footer-content">
        <!-- Main Content -->
        <div class="container mx-auto px-4 relative z-10">
          <!-- Top Section -->
          <div class="pt-20 pb-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <!-- Company Info -->
              <div class="company-info space-y-6">
                <h3 class="text-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                  <span class="text-[#2AB24B]">Orchestra</span>
                  <span class="text-white">Sys</span>
                </h3>
                <p class="text-gray-300">
                  Transforming businesses through innovative technology solutions.
                </p>
                <app-footer-social></app-footer-social>
              </div>

              <!-- Quick Links -->
              <app-footer-links></app-footer-links>

              <!-- Contact Info -->
              <app-footer-contact></app-footer-contact>

              <!-- Newsletter -->
              <app-footer-newsletter></app-footer-newsletter>
            </div>
          </div>

          <!-- Bottom Section -->
          <app-footer-copyright></app-footer-copyright>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      .footer-wrapper {
        @apply relative bg-gradient-to-br from-[#1f2251] to-[#151937] text-white overflow-hidden;
        
        &::before {
          content: '';
          @apply absolute top-0 left-0 right-0 h-px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        }
      }

      .footer-content {
        @apply relative;
        
        &::before, &::after {
          content: '';
          @apply absolute w-96 h-96 rounded-full opacity-10 blur-3xl;
        }

        &::before {
          @apply -top-48 -left-48 bg-[#2AB24B];
        }

        &::after {
          @apply -bottom-48 -right-48 bg-[#2AB24B];
        }
      }

      .company-info {
        animation: slideIn 0.5s ease-out;
      }

      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  `]
})
export class FooterComponent {}