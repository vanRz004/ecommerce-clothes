import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@products/product.component';
import { Product } from '@shared/components/counter/models/product.model';
import { HeaderComponent } from "@shared/components/header/header.component";
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  // señal de producto
  products = signal <Product[]>([])
  private cartService = inject(CartService)
  private productService = inject(ProductService)

  ngOnInit(){
    this.productService.getProducts()
    .subscribe({
      next: ( products ) => this.products.set(products),
      error: () =>{

      }
    })
    // gestionar un error
    
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }
}
