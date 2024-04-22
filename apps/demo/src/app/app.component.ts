import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StyleguideComponent } from '@styleguide-repro-nx/styleguide';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, StyleguideComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo';
}
