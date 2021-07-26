import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  dt = new Date()
  bal = 10000
  acNm = 'android'

  constructor() { }

  ngOnInit(): void {
  }

}
