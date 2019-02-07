import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
declare var firebase;


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email;
  password;

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
