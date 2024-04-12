import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  callProduct(): void {
    console.log("Chegou aqui")

    this.router.navigate(['/product']);
  }

  callPeople(): void {
    this.router.navigate(['/people']);
  }

}
