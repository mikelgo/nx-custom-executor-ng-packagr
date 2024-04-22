import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from '@components/components';
import { BtnModule } from '@components/components/btn';


@Component({
  selector: 'lib-styleguide',
  standalone: true,
  imports: [CommonModule, ComponentsComponent, BtnModule],
  templateUrl: './styleguide.component.html',
  styleUrl: './styleguide.component.css',
})
export class StyleguideComponent {}
