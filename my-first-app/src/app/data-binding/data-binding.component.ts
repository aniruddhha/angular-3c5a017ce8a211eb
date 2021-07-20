import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  os = 'windows'
  ver = 11
  clr = 'text-info'

  whatIsDate() {
    return new Date()
  }
}
