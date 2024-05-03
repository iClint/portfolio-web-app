import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {
  state,
  style,
  animate,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          overflow: 'hidden',
          opacity: '1',
        })
      ),
      transition('collapsed <=> expanded', [animate('0.25s ease-out')]),
    ]),
  ],
})
export class NavigationComponent {
  navOptions = ['about', 'blog', 'portfolio', 'contact'];
  isMenuVisible: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Adjust the menu visibility based on screen size
    this.isMenuVisible = window.innerWidth > 430;
  }
  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
