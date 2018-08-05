import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sideBarMinimized = false;
  sideBarHovering = false;
  time;
  date;
  constructor() { }

  ngOnInit() {
    setInterval(() => {         //replaced function() by ()=>
      this.date = new Date().toDateString();
      this.time = new Date().toLocaleTimeString();
    }, 1000);

  }

  sideBarToggle() {
    this.sideBarMinimized = !this.sideBarMinimized;
  }

  sideBarHover() {
    this.sideBarHovering = true;
  }

  sideBarNotHover() {
    this.sideBarHovering = false ;
  }

}
