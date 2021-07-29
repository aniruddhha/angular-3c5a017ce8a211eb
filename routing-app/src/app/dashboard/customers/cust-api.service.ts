import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustData } from './response';

@Injectable()
export class CustApiService {

  constructor(
    private http: HttpClient
  ) { }

  getCustomers() {
    return this.http.get('https://reqres.in/api/unknown');
  }

  saveCustomer(customer: CustData) {
    return this.http.post('https://reqres.in/api/users', customer);
  }
}
