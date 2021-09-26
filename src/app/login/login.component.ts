import { Component, OnInit } from '@angular/core';
import { Router, Navigation } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { from } from 'rxjs';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public error: any;
  LoginForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });
  constructor(private route: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    const getRegisteredUsers = () => {
      const registeredUsers = localStorage.getItem('registeredUsers');
      return registeredUsers ? JSON.parse(registeredUsers) : [];
    };
    const registeredUsers = getRegisteredUsers();
    const name = this.LoginForm.value.username;
    const password = this.LoginForm.value.password;
    const login = registeredUsers.filter(
      (usr: any) => usr.username === name && usr.password === password
    );
    if (login.length == 0) {
      this.error = 'Login Credintial does not match';
      console.log(this.error);
    } else {
      localStorage.setItem('currentUser', JSON.stringify(login));
      this.route.navigate(['/dashboard']);
    }
  }
}
