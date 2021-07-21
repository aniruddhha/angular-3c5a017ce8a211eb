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

  mobiles = [ // of mobiles
    { os: 'android', ver: 12 }, // let mobile
    { os: 'windows', ver: 11 },
    { os: 'iOS', ver: 15 }
  ]

  day = 2

  ngOnInit(): void {
  }

  btnClk() {
    this.btPr = !this.btPr
    console.log(this) // this is current object under execution
  }
}
