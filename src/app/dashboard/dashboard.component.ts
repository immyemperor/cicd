import { Component, OnInit } from '@angular/core';

import { NavComponent } from '../nav/nav.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

import {Auth2Service} from '../service/auth2.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:Auth2Service) { }

  ngOnInit() {
      
  }

login(){
  console.log("logging in");
  this.auth.user_login("root@abc.com","root").subscribe(res=>console.log(res));
  //console.log(data);
  //this.router.navigate(["/home"]);
  
}
}