import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private route: ActivatedRoute,
        private router: Router,) { }

  ngOnInit() {
  }
register(){
  console.log("register in");
  this.router.navigate(["/home"]);
  
}
}