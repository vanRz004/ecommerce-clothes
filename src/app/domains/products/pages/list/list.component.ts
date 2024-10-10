import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@products/product.component';
import { Product } from '@shared/components/counter/models/product.model';
import { HeaderComponent } from "@shared/components/header/header.component";
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { Category } from '@shared/components/counter/models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {
  // señal de producto
  products = signal <Product[]>([])
  categories = signal <Category[]>([])
  private cartService = inject(CartService)
  private productService = inject(ProductService) 
  private categoryService = inject(ProductService) 
  @Input() category_id?: string;

  ngOnInit(){

    this.getCategory()    
  }

  ngOnChanges(changes:SimpleChanges){

      this.getProducts()
    
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }

  private getProducts (){
    this.productService.getProducts(this.category_id)
    .subscribe({
      next: ( products ) => this.products.set(products),
      error: () =>{

      }
    })
  }
  private getCategory (){
    this.productService.getCategory()
    .subscribe({
      next: ( data ) => this.categories.set(data),
      error: () =>{

      }
    })
  }
}
