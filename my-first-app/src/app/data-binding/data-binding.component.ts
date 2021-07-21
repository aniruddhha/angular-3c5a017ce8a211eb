import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  os = 'windows'
  ver = 11
  clr = 'text-danger'
  typ = 'button'

  whatIsDate() {
    return new Date()
  }

  changeClass(str: string) {
    console.log(`Button Clicked ${str}`)
    this.clr = str
  }
}
