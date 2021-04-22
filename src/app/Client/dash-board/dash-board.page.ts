import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.page.html',
  styleUrls: ['./dash-board.page.scss'],
})
export class DashBoardPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
      login(){
       this.router.navigateByUrl('login');
      }

      register(){
        this.router.navigateByUrl('register');
      }
}
