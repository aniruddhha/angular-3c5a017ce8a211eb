import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-dropdown',
  templateUrl: './city-dropdown.component.html',
  styleUrls: ['./city-dropdown.component.css']
})
export class CityDropdownComponent implements OnInit {

  @Input('country')
  country = ''

  constructor() { }

  ngOnInit(): void {
  }

}
