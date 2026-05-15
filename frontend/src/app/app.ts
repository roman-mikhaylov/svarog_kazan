import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { MOCK_PRODUCTS } from './models/mock-products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'svarog-landing';
  products: Product[] = MOCK_PRODUCTS;
}