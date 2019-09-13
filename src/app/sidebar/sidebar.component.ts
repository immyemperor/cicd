import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private route: ActivatedRoute,
        private router: Router) { }

  ngOnInit() {
 
  }
//https://stackblitz.com/edit/angular-7-registration-login-example?file=app%2F_guards%2Findex.ts



logout(){
  console.log("logged out");
  this.router.navigate(["/login"]);
  
}

}