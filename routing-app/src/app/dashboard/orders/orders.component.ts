import { Component, OnInit } from '@angular/core';
import { StorageService } from './order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [StorageService] //providing
})
export class OrdersComponent implements OnInit {

  constructor(
    private st: StorageService
  ) { }

  ngOnInit(): void {
    localStorage.setItem('from', 'angular app')
    sessionStorage.setItem('who', 'android')

    console.log(`Local Storage - ${localStorage.getItem('from')}`)
    console.log(`Session Storage - ${sessionStorage.getItem('who')}`)

    this.st.saveUser()
    console.log(`User Is ${this.st.getUser()}`)
  }
}
