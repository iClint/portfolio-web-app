import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../models/page.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  result: any;
  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body);
  }

  sendGraphQLQuery(): Observable<any> {
    const query = `
   query{
     page(title: "About") {
      title
      sections {
        heading
        content
    }
  }
}
    `;

    return this.http.post<Page>('http://localhost:5178/graphql/', { query });
  }
}
