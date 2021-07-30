import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from './invoice-service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css'],
  providers: [InvoiceService] // provided service
})
export class InvoicesComponent implements OnInit {

  id = ''

  constructor(
    private actRt: ActivatedRoute,
    private invoice: InvoiceService // injected
  ) { }

  ngOnInit(): void {
    this.actRt.params.subscribe(
      prm => this.id = prm['invId'], // -> progress
      err => console.log(err),
      () => console.log(`Completed`)
    )

    this.invoice.camera().subscribe(
      dt => console.log(dt),
      err => console.log(err),
      () => console.log(`Completed`)
    )
  }
}
