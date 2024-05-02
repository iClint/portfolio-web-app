import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { aboutConfig } from './about.config';
import { HttpService } from '../../services/http-service.service';
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

  constructor(private httpService: HttpService) {}

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
