import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  result: any;
  constructor(private http: HttpClient) {}

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

    return this.http.post<any>('http://localhost:5178/graphql/', { query });
  }
}
