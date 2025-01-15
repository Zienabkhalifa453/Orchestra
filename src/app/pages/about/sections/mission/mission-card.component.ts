import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../../../shared/components/icons/icon.module';
import { iconStyles } from '../../../../shared/styles/icon.styles';

@Component({
  selector: 'app-mission-card',
  standalone: true,
  imports: [CommonModule, IconModule],
  template: `
    <div class="mission-card">
      <div class="icon-wrapper">
        <lucide-icon 
          [name]="icon" 
          [size]="iconStyles.size.lg"
          [strokeWidth]="iconStyles.strokeWidth">
        </lucide-icon>
      </div>
      <h3 class="title">{{title}}</h3>
      <p class="description">{{description}}</p>
      <div class="points">
        <div *ngFor="let point of points" class="point">
          <lucide-icon 
            name="check-circle" 
            [size]="iconStyles.size.sm"
            class="point-icon">
          </lucide-icon>
          <span>{{point}}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .mission-card {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      border: 1px solid rgba(0,0,0,0.1);
      transition: all 0.3s;
      height: 100%;
      position: relative;
      overflow: hidden;
    }

    .mission-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(45deg, #2AB24B08, #1f225108);
      opacity: 0;
      transition: opacity 0.3s;
    }

    .mission-card:hover {
      transform: translateY(-0.5rem);
      border-color: #2AB24B40;
      box-shadow: 0 20px 40px -15px rgba(42, 178, 75, 0.1);
    }

    .mission-card:hover::before {
      opacity: 1;
    }

    .icon-wrapper {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 1rem;
      background: #2AB24B10;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      transition: transform 0.3s;
    }

    .mission-card:hover .icon-wrapper {
      transform: scale(1.1) rotate(5deg);
    }

    .icon-wrapper lucide-icon {
      color: #2AB24B;
    }

    .title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2251;
      margin-bottom: 1rem;
    }

    .description {
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .points {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .point {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      color: #64748b;
    }

    .point-icon {
      color: #2AB24B;
    }
  `]
})
export class MissionCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() points: string[] = [];

  iconStyles = iconStyles;
}