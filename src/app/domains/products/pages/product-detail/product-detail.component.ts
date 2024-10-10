import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '@shared/components/counter/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {
  // injectar el servicio de la api
  private productService = inject(ProductService);
  @Input() id?: string;
  product = signal<Product | null>(null)
  // injectar el servicio de el carrito
  private cartService = inject(CartService);

  // cover para quye al hacer click cambie la imegn grande por la que seleccione
  cover = signal('')

  ngOnInit(){
    if(this.id){
      this.productService.getOne(this.id)
      // obtener la informacion hacer lo de abajo
      .subscribe({
        next: (product) =>{
          this.product.set(product)
          if(product.images.length >0){
            this.cover.set(product.images[0])
          }
        }
      })
       //como surcribirse 

    }
  }

  changeImage(newImg : string){
    this.cover.set(newImg)
  }
  addToCart(){
    const newProduct = this.product() 
    if(newProduct){
      this.cartService.addToCart(newProduct) ;

    }
  }


}
