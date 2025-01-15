import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { ProductHeroComponent } from './product-hero.component';
import { ProductFeatureComponent } from './product-feature.component';
import { IconModule } from '../../shared/components/icons/icon.module';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    ProductHeroComponent,
    ProductFeatureComponent,
    IconModule
  ],
  template: `
    <div class="min-h-screen">
      <app-product-hero></app-product-hero>

      <!-- Products Grid -->
      <section class="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div class="container mx-auto px-4">
          <!-- Background Elements -->
          <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-0 left-0 w-96 h-96 bg-[#2AB24B]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#1f2251]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>

          <!-- Products Grid -->
          <div class="relative grid md:grid-cols-3 gap-6">
            <app-product-card
              *ngFor="let product of products; let i = index"
              [icon]="product.icon"
              [title]="product.title"
              [description]="product.description"
              [features]="product.features"
              [id]="product.id"
              class="product-card"
              [attr.data-aos-delay]="i * 100">
            </app-product-card>
          </div>
        </div>
      </section>

      <app-product-feature></app-product-feature>
    </div>
  `
})
export class ProductsComponent {
  products = [
    {
      id: 'enterprise-solutions',
      icon: 'layout-grid',
      title: 'Enterprise Solutions',
      description: 'Streamline your business operations with our comprehensive solutions.',
      features: [
        'Custom Development',
        'System Integration',
        'Process Automation'
      ]
    },
    {
      id: 'cloud-services',
      icon: 'cloud',
      title: 'Cloud Services',
      description: 'Scalable and secure cloud infrastructure for modern businesses.',
      features: [
        'Cloud Migration',
        'Infrastructure Management',
        'Security Services'
      ]
    },
    {
      id: 'data-analytics',
      icon: 'bar-chart',
      title: 'Data Analytics',
      description: 'Transform your data into actionable business insights.',
      features: [
        'Business Intelligence',
        'Predictive Analytics',
        'Real-time Monitoring'
      ]
    },
    {
      id: 'security-solutions',
      icon: 'shield',
      title: 'Security Solutions',
      description: 'Protect your digital assets with advanced security.',
      features: [
        'Threat Detection',
        'Security Audits',
        'Compliance Management'
      ]
    },
    {
      id: 'mobile-solutions',
      icon: 'smartphone',
      title: 'Mobile Solutions',
      description: 'Create powerful mobile experiences for your users.',
      features: [
        'App Development',
        'Cross-platform',
        'Mobile Security'
      ]
    },
    {
      id: 'custom-development',
      icon: 'code',
      title: 'Custom Development',
      description: 'Tailored solutions to meet your unique requirements.',
      features: [
        'Web Applications',
        'API Integration',
        'Legacy Modernization'
      ]
    }
  ];
}