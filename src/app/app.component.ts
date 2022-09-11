import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  title(title: any) {
    throw new Error('Method not implemented.');
  }

constructor(public router: Router) { }
  
}
