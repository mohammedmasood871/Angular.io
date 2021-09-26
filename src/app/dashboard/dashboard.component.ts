import { Component, OnInit } from '@angular/core';
import { Router, Navigation } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: any;
  constructor(private route: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('currentUser');
    this.user = data ? JSON.parse(data) : [];
    console.log(this.user);
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.route.navigate(['']);
  }
}
