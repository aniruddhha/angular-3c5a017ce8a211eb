import { Component, OnInit } from '@angular/core';
import { TableData } from './table-data';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  company: string
  invoices: Array<TableData>
  totalInvAmt = 0
  totalTaxAmt = 0
  grandTotal = 0

  obj = {
    'text-success': true,
    'text-danger': false
  }

  constructor(
    // this feature of TS and not of JS
    // here is public is access modifier
    // access modifier is that thing which restricts access,
  ) {
    this.company = 'my company'
    this.invoices = [
      { invNo: null, date: null, client: null, invAmt: null, taxAmt: null },
      { invNo: '1223489', date: '15 Jul 2021', client: 'abc', invAmt: 45, taxAmt: 8 },
      { invNo: '1226669', date: '16 Jul 2021', client: 'pqr', invAmt: 100, taxAmt: 10 },
      { invNo: '1236886', date: '17 Jul 2021', client: 'xyz', invAmt: 30, taxAmt: 2 },
      { invNo: '1239862', date: '18 Jul 2021', client: 'tuv', invAmt: 1000, taxAmt: 30 },
      { invNo: '1244258', date: '19 Jul 2021', client: 'ijk', invAmt: 10, taxAmt: 1 },
      { invNo: '1245558', date: '20 Jul 2021', client: 'lmn', invAmt: 54, taxAmt: 3 },
      { invNo: '1265346', date: '21 Jul 2021', client: 'hij', invAmt: 899, taxAmt: 20 }
    ]
  } // component object would be getting created

  ngOnInit(): void { // from this line object will be treated as Angular Component
    // e.g.
    // go to web and pull the data 
    // subscribe to anything 
    // initilization of state can be done here
    // etc etc 

    this.invoices.forEach(invoice => {
      if (invoice.client == 'pqr') {
        console.log(`I got the client`)
        console.log(invoice)
      }
    })

    let totalInvAmt = 0
    let totalTaxAmt = 0
    let grandAmout = 0
    this.invoices.forEach(function (invoice) {
      if (invoice.invAmt != null)
        totalInvAmt = totalInvAmt + invoice.invAmt
      if (invoice.taxAmt != null)
        totalTaxAmt += invoice.taxAmt
    })
    console.log(totalInvAmt)
    this.totalInvAmt = totalInvAmt
    this.totalTaxAmt = totalTaxAmt
  }
}


const fn = function (num1: number, num2: number) {
  return num1 + num2
}

const fn1 = (num1: number, num2: number) => num1 + num2 // fat arrow or lambda