import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { MOCK_PRODUCTS } from '../../models/mock-products';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class LandingComponent {
  products: Product[] = MOCK_PRODUCTS;
}