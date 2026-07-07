import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-squared-icon',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './squared-icon.component.html',
  styleUrl: './squared-icon.component.scss'
})
export class SquaredIconComponent {
  iconClass = input<IconName>('bell');
  backgroundColor = input('blue');

}
