import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-own',
  templateUrl: './my-own.component.html',
  styleUrls: ['./my-own.component.css']
})
export class MyOwnComponent implements OnInit {

  @ViewChild('nm', { static: true })
  nm!: ElementRef

  @ViewChild('btn', { static: true })
  btn!: ElementRef<HTMLButtonElement>

  isSh = false

  constructor() { }

  ngOnInit(): void {
    console.log(this)
    console.log(this.nm)
    this.nm.nativeElement.style.border = '1px solid red'

    setTimeout(() => this.btn.nativeElement.click(), 5000)
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

  onBtn(nm: HTMLInputElement) {
    console.log(nm.value)
  }
}