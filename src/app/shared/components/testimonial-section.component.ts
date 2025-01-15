import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="testimonials-title text-3xl md:text-4xl font-bold text-center text-[#1f2251] mb-16">
          What Our Clients Say
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div *ngFor="let testimonial of testimonials" 
               class="testimonial-card bg-white p-8 rounded-xl shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-full bg-[#2AB24B] bg-opacity-10 flex items-center justify-center">
                <span class="text-2xl">{{testimonial.icon}}</span>
              </div>
              <div class="ml-4">
                <h3 class="font-semibold text-[#1f2251]">{{testimonial.name}}</h3>
                <p class="text-sm text-gray-500">{{testimonial.position}}</p>
              </div>
            </div>
            <p class="text-gray-600 italic">"{{testimonial.quote}}"</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TestimonialSectionComponent {
  testimonials = [
    {
      icon: '👨‍💼',
      name: 'John Smith',
      position: 'CEO, Tech Corp',
      quote: 'OrchestraSys transformed our business operations with their innovative solutions.'
    },
    {
      icon: '👩‍💼',
      name: 'Sarah Johnson',
      position: 'CTO, Global Finance',
      quote: 'Their expertise and support have been invaluable to our digital transformation.'
    },
    {
      icon: '👨‍💼',
      name: 'Michael Brown',
      position: 'Director, HealthTech',
      quote: 'Outstanding service and cutting-edge solutions that deliver real results.'
    }
  ];
}