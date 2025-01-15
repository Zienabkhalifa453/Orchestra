import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="feature-card group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div class="icon-wrapper mb-6 p-4 rounded-lg bg-[#2AB24B] bg-opacity-10 inline-block group-hover:bg-[#2AB24B] transition-colors duration-300">
        <span class="text-3xl group-hover:text-white transition-colors duration-300">{{icon}}</span>
      </div>
      <h3 class="text-xl font-semibold text-[#1f2251] mb-4">{{title}}</h3>
      <p class="text-gray-600">{{description}}</p>
    </div>
  `
})
export class FeatureCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
}