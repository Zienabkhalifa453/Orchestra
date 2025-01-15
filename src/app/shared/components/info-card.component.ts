import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white p-6 rounded-lg shadow-lg {{className}}">
      <ng-content></ng-content>
    </div>
  `
})
export class InfoCardComponent {
  @Input() className = '';
}