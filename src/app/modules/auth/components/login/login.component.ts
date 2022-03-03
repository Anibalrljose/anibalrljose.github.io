import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPass: boolean = false;
  loginForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.loginForm = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  doLogin($event: Event) {
    $event.preventDefault();
    console.log(this.loginForm.getRawValue());
  }
}
