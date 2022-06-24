import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rates } from './rates';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor(private httpClient: HttpClient) {}

  getRates(base: string): Observable<Rates> {
    return this.httpClient.get<Rates>(
      `https://api.apilayer.com/fixer/latest?apikey=C6E6aP3VMqb1KlNjyOLuQVnU7mJL3jbo&base=${base}&symbols=GBP,JPY,EUR,USD,NGN`
    );
  }
}
