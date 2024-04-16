import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [MatButtonModule]
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  callBack(): void {
    this.router.navigate(['/home']);
  }
}
