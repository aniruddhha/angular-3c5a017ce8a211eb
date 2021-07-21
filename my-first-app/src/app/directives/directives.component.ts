import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  style = { 'font-size': '11px' }
  classes = { 'alert': true, 'alert-info': true }
  btPr = true

  ngOnInit(): void {
  }

  btnClk() {
    this.btPr = !this.btPr
  }

}
