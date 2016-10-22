import { Component,Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'product-detail',
  templateUrl: 'app/templates/product-detail.html'
})
export class productDetailComponent {
    @Input()
    product:Product;
}

