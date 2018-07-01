import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sideBarMinimized = false;
  sideBarHovering = false;
  constructor() { }

  ngOnInit() {
  }

  sideBarToggle() {
    console.log('clicked');
    this.sideBarMinimized = !this.sideBarMinimized;
  }

  sideBarHover() {
    this.sideBarHovering = true;
  }

  sideBarNotHover() {
    this.sideBarHovering = false ;
  }

}
