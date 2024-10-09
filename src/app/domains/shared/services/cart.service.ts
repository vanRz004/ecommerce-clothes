import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../components/counter/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([])
  
  total = computed(()=>{
    return this.cart().reduce((total, product) => total + product.price, 0)
  })

  addToCart(product: Product){
    this.cart.update(state => [ ...state, product])
  }

  constructor() {
   }
}
