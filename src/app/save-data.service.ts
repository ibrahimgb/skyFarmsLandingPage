import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaveDataService {
  constructor(private http: HttpClient) {}

  submitEmail(data: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const requestOptions = { headers: headers };

    return this.http
      .post(
        'http://192.168.1.14:3000/landing-page/saveEmail',
        { email: data },
        requestOptions
      )
      .subscribe(() => {
        //
      });
  }
}
