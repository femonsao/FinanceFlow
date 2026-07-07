import { Component, input } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  nomeButton = input<string>('Clique aqui');

  exemplo(){
    
  }
}
