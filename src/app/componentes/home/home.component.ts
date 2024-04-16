import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatButtonModule]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  callProduct(): void {
    this.router.navigate(['/product']);
  }

  callPeople(): void {
    this.router.navigate(['/people']);
  }

}
