import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from '@styleguide-repro-nx/components';
import { BtnModule } from '@styleguide-repro-nx/components/btn';

@Component({
  selector: 'lib-styleguide',
  standalone: true,
  imports: [CommonModule, ComponentsComponent, BtnModule],
  templateUrl: './styleguide.component.html',
  styleUrl: './styleguide.component.css',
})
export class StyleguideComponent {}
