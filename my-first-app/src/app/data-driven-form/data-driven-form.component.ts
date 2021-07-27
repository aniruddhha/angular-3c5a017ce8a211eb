import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.css']
})
export class DataDrivenFormComponent implements OnInit {

  fg !: FormGroup // added ! just to say, i will initilize it later on

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      email: this.fb.control(''),
      password: this.fb.control(''),
      chk: this.fb.control(false)
    })
  }

  onSub() {
    // console.log(this.fg)
    console.log(this.fg.value)
  }
}
