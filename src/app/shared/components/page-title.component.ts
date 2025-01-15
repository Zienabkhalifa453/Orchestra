import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="text-4xl font-bold text-[#1f2251] mb-12 {{animationClass}}">{{title}}</h1>
  `
})
export class PageTitleComponent {
  @Input() title!: string;
  @Input() animationClass = '';
}