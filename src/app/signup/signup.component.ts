import { Component, OnInit } from '@angular/core';
import { Router, Navigation } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validator,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signForm = new FormGroup({
    name: new FormControl(null, Validators.required),
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

    const payload = {
      name: this.signForm.value.name,
      username: this.signForm.value.username,
      password: this.signForm.value.password,
    };
    registeredUsers.push(payload);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    this.route.navigate(['']);
  }
}
