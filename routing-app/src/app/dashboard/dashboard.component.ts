import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private actRt: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.actRt.queryParams.subscribe(prm => console.log(prm))
  }
}
