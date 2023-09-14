import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title = 'Products Listing!';
  products: any;
  cart: any[] = [];
  total = 0;

  constructor(private dataService: DataService) {}

  async ngOnInit(): Promise<any> {
    const result = await this.dataService.fetchProducts();
    this.products = result?.products;
  }

  addToCart(item: any) {
    if (item.stock > 0) {
      item.stock = item.stock - 1;
      // Add the product to the cart array
      const cartItem = this.cart.find(cartProduct => cartProduct._id === item._id);

      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        this.cart.push({ ...item, quantity: 1 });
      }
      this.total = this.total + parseFloat(item.price);
    }
  }

  removeFromCart(cartItem: any) {
    const index = this.cart.indexOf(cartItem);
    if (index !== -1) {
      // Remove the item from the cart
      this.cart.splice(index, 1);
  
      // Find the corresponding product in the products list
      this.products.find((prod: any) => {
        if(prod._id === cartItem._id)
          prod.stock += cartItem.quantity;
      });
      this.total = this.total - parseFloat(cartItem.price);
    }
  }
}
