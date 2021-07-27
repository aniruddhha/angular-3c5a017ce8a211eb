import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    const emlVld = Validators.compose([
      Validators.required
    ])

    const passVld = Validators.compose([
      Validators.required
    ])

    this.fg = this.fb.group({
      email: this.fb.control('', emlVld),
      password: this.fb.control('', passVld),
      chk: this.fb.control(false)
    })
  }

  onSub() {
    console.log(this.fg)
    // console.log(this.fg.value)
  }

  emailControl() {
    return this.fg.get('email')
  }

  passwordControl() {
    return this.fg.get('password')
  }
}
