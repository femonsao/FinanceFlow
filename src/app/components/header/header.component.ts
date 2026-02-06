import { Component, inject, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { LayoutService } from '../../service/layout-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  layoutService = inject(LayoutService);

  title = this.layoutService.title;
}
