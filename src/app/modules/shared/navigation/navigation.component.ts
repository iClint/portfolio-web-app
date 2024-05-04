import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {
  state,
  style,
  animate,
  transition,
  trigger,
} from '@angular/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({
          height: '2px',
          overflow: 'hidden',
          opacity: '1',
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
  navOptions = [
    { label: 'About', url: 'about' },
    { label: 'Blog', url: 'blog' },
    { label: 'Portfolio', url: 'portfolio' },
    { label: 'Contact', url: 'contact' },
  ];
  isMenuVisible: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isMenuVisible = window.innerWidth > 430;
  }
  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
