import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustApiService } from './cust-api.service';
import { AppRes, CustData } from './response';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [CustApiService] // provided
})
export class CustomersComponent implements OnInit {

  msg = ''
  appRes !: AppRes

  constructor(
    private customer: CustApiService // injected
  ) { }

  ngOnInit(): void {
    this.customer.getCustomers().subscribe(res => {
      console.log(res)
      console.log('I am first')
      this.appRes = res as AppRes
    })

    console.log('I am last')
  }

  onSave(frm: NgForm) {
    const customer = frm.value as CustData
    console.log(customer)
    this.customer.saveCustomer(customer).subscribe(
      res => {
        console.log(res)
        this.msg = 'Customer Saved Successfully'
        frm.reset()
      }
    )
  }
}
