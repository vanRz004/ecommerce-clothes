import { Component, inject, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';
import { Product } from '../counter/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true)
  private cartService = inject(CartService)
  listCart = this.cartService.cart;
  total = this.cartService.total
  toggleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState)
  }

}
