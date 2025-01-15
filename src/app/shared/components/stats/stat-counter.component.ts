import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="text-4xl md:text-5xl font-bold">{{displayValue}}</span>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class StatCounterComponent implements OnInit {
  @Input() value: number = 0;
  @Input() duration: number = 2000;
  displayValue: number = 0;

  ngOnInit() {
    this.animateValue();
  }

  private animateValue() {
    const start = 0;
    const end = this.value;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(this.duration / range));
    
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      this.displayValue = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
}