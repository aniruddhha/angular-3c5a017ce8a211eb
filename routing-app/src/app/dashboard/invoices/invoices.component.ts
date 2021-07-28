import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  id = ''

  constructor(
    private actRt: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.actRt.params.subscribe(prm => this.id = prm['invId'])
  }
}
