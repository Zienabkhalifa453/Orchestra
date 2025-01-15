import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFeatureListComponent } from './components/product-feature-list.component';
import { ProductOverviewComponent } from './components/product-overview.component';
import { ProductSpecsComponent } from './components/product-specs.component';
import { ProductCTAComponent } from './components/product-cta.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    ProductFeatureListComponent,
    ProductOverviewComponent,
    ProductSpecsComponent,
    ProductCTAComponent
  ],
  template: `
    <div class="product-detail-page">
      <!-- Background Elements -->
      <div class="background-elements">
        <div class="gradient-orb gradient-orb-1"></div>
        <div class="gradient-orb gradient-orb-2"></div>
        <div class="grid-pattern"></div>
      </div>

      <div class="container mx-auto px-4 py-24 relative z-10">
        <app-product-overview></app-product-overview>
        <app-product-feature-list></app-product-feature-list>
        <app-product-specs></app-product-specs>
        <app-product-cta></app-product-cta>
      </div>
    </div>
  `,
  styles: [`
    .product-detail-page {
      @apply min-h-screen relative bg-gray-50;
    }

    .background-elements {
      @apply absolute inset-0 overflow-hidden pointer-events-none;
    }

    .gradient-orb {
      @apply absolute rounded-full opacity-30 blur-3xl;
    }

    .gradient-orb-1 {
      @apply w-[600px] h-[600px] bg-[#2AB24B]/20 -top-64 -right-64;
    }

    .gradient-orb-2 {
      @apply w-[600px] h-[600px] bg-[#1f2251]/20 -bottom-64 -left-64;
    }

    .grid-pattern {
      @apply absolute inset-0 opacity-[0.015];
      background-image: 
        linear-gradient(rgba(31, 34, 81, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(31, 34, 81, 0.2) 1px, transparent 1px);
      background-size: 50px 50px;
    }
  `]
})
export class ProductDetailComponent {}