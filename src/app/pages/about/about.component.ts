import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHeroComponent } from './sections/about-hero.component';
import { AboutMissionComponent } from './sections/about-mission.component';
import { AboutHistoryComponent } from './sections/about-history.component';
import { AboutTeamComponent } from './sections/about-team.component';
import { AboutValuesComponent } from './sections/about-values.component';
import { CTASectionComponent } from '../../shared/components/cta-section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    AboutHeroComponent,
    AboutMissionComponent,
    AboutHistoryComponent,
    AboutTeamComponent,
    AboutValuesComponent,
    CTASectionComponent
  ],
  template: `
    <div class="min-h-screen">
      <app-about-hero></app-about-hero>
      <app-about-mission></app-about-mission>
      <app-about-history></app-about-history>
      <app-about-values></app-about-values>
      <app-about-team></app-about-team>
      <app-cta-section></app-cta-section>
    </div>
  `
})
export class AboutComponent {}