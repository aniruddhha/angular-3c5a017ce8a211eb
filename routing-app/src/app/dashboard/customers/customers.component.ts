import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppRes } from './response';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  appRes !: AppRes

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get('https://reqres.in/api/unknown').subscribe(res => {
      console.log(res)
      this.appRes = res as AppRes
    })
  }
}
