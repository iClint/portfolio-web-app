import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { aboutConfig } from './about.config';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  _config = aboutConfig;
}
