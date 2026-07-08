import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { IconDefinition, IconName } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-squared-icon',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './squared-icon.component.html',
  styleUrl: './squared-icon.component.scss'
})
export class SquaredIconComponent {
  iconClass = input<IconDefinition>(faBell);
  backgroundColor = input('#0b94f5ec');

}
