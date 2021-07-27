import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-country-selection',
  templateUrl: './country-selection.component.html',
  styleUrls: ['./country-selection.component.css']
})
export class CountrySelectionComponent implements OnInit {

  @Output('countryEntered')
  em = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onOkay(cntr: string) {
    console.log(cntr)
    this.em.emit(cntr)
  }
}
