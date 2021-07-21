import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  invoices = [
    { invNo: '1223489', date: '15 Jul 2021', client: 'abc', invAmt: 45, taxAmt: 8 },
    { invNo: '1226669', date: '16 Jul 2021', client: 'pqr', invAmt: 100, taxAmt: 10 },
    { invNo: '1236886', date: '17 Jul 2021', client: 'xyz', invAmt: 30, taxAmt: 2 },
    { invNo: '1239862', date: '18 Jul 2021', client: 'tuv', invAmt: 1000, taxAmt: 30 },
    { invNo: '1244258', date: '19 Jul 2021', client: 'ijk', invAmt: 10, taxAmt: 1 },
    { invNo: '1245558', date: '20 Jul 2021', client: 'lmn', invAmt: 54, taxAmt: 3 },
    { invNo: '1265346', date: '21 Jul 2021', client: 'hij', invAmt: 899, taxAmt: 20 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
