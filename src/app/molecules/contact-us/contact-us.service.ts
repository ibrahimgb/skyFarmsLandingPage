import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  constructor(private http: HttpClient) {}

  submit(data: object) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const requestOptions = { headers: headers };

    return this.http.post(
      'http://192.168.1.14:3000/landing-page/saveForm',
      data,
      requestOptions
    );
  }
}
