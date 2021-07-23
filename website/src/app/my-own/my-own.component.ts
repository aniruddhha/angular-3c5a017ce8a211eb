import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-own',
  templateUrl: './my-own.component.html',
  styleUrls: ['./my-own.component.css']
})
export class MyOwnComponent implements OnInit {

  isSh = true
  constructor() { }

  ngOnInit(): void {
  }

  onDropdownClicked() {
    this.isSh = !this.isSh
  }

  onItemClick(item: number) {
    if (item == 1) { } //cut
    else if (item == 2) { } //copy
    else { } //paste
    this.isSh = false
  }
}
