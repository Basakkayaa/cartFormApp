import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductComponent } from '../components/product/product.component';
import { UserComponent } from '../components/user/user.component';
import { CartComponent } from '../components/cart/cart.component';
import { LoginComponent } from '../components/login/login.component';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ProductComponent, UserComponent, CartComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cartFormApp';
  // @Input() carts: Cart[] = []  /// input ile dışardan der alacak 

  // addCartItem(productId: number) {  /// ekleme yapmak için
  //   let cart = this.carts.find(cart => cart.productId == productId)
  //   if (cart == undefined) {
  //     this.carts.push({ productId: productId, count: 1 })
  //   } else {
  //     cart.count++;
  //   }
  // }
  // remove(productId: number) { // 0 olunca silmesi için
  //   let cartIndex = this.carts.findIndex(cart => cart.productId == productId)
  //   if (cartIndex != -1) {
  //     this.carts.splice(cartIndex, 1)
  //   }
  // }
}
