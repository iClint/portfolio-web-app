import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { aboutConfig } from './about.config';
import { HttpClientService } from '../../services/http-client.service';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  _config = aboutConfig;
  postResult: any;

  constructor(private httpService: HttpClientService) {}

  ngOnInit() {
    this.httpService
      .sendGraphQLQuery()
      .pipe(take(1))
      .subscribe({
        next: (result) => {
          this.postResult = result;
        },
        error: (error) => {
          console.log('Error: ', error);
        },
      });
  }
}
