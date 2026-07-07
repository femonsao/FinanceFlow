import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  buttons = input<{ label: string; url: string }[]>([
    { label: 'Home', url: '/home' },
    { label: 'Profile', url: '/profile' },
    { label: 'Settings', url: '/settings' },
    { label: 'Logout', url: '/logout' }
  ]);

  router = inject(Router); 
  navigateTo(url: string): void{
    console.log(`Navigating to: ${url}`);
    this.router.navigate([url]);
  }
}
