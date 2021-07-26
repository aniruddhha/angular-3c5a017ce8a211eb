import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-op',
  templateUrl: './op.component.html',
  styleUrls: ['./op.component.css']
})
export class OpComponent implements OnInit {

  @Output('clk')
  em = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClk() {
    console.log(`Button Clicked`)
    this.em.emit('blue')
  }
}
