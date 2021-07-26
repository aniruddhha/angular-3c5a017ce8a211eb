import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css']
})
export class IpComponent implements OnInit {

  @Input('clr')
  clr = 'yellow' // clr becomes property

  constructor() { }

  ngOnInit(): void {
  }

}
