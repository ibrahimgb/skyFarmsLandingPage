import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SaveDataService {
  apiUrl: string = environment.domain;

  constructor(private http: HttpClient) {}

  submitEmail(data: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const requestOptions = { headers: headers };

    return this.http
      .post(
        `${this.apiUrl}/landing-page/saveEmail`,
        { email: data },
        requestOptions
      )
      .subscribe(() => {
        //
      });
  }
}
