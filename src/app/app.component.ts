import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/components/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoadingScreenComponent } from './shared/components/loading/loading-screen.component';
import { ScrollService } from './shared/services/scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    LoadingScreenComponent
  ],
  template: `
    <app-loading-screen *ngIf="loading"></app-loading-screen>
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent {
  loading = true;

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}