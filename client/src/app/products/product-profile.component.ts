import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-profile',
  templateUrl: './product-profile.component.html',
  styleUrls: ['./product-profile.component.scss']
})
export class ProductProfileComponent implements OnInit {

  product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
