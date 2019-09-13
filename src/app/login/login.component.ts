import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Auth2Service} from '../service/auth2.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,
        private router: Router,
        private auth: Auth2Service
        ) { }

  ngOnInit() {
  }
login(data){
  console.log("logging in");
  console.log(data);
  this.auth.user_login(data.email,data.password).subscribe(res=>console.log(res));
  //console.log(data);
  //this.router.navigate(["/home"]);
  
}
}