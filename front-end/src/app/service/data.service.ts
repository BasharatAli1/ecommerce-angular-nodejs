import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private getProductsUrl = 'http://127.0.0.1:4000/api/v1/products';
  private addProductUrl = 'http://127.0.0.1:4000/api/v1/products/new';
  private getDealsUrl = 'http://127.0.0.1:4000/api/v1/deals';
  private addDealtUrl = 'http://127.0.0.1:4000/api/v1/deals/new';

  constructor(private http: HttpClient) {}
  
  async fetchProducts(): Promise<any> {
    return await this.http.get(this.getProductsUrl).toPromise();
  }
  
  async fetchDeals(): Promise<any> {
    return await this.http.get(this.getDealsUrl).toPromise();
  }

//   getDeals() {
//     return this.deals;
//   }

//   getProducts() {
//     return this.products;
//   }

  async saveProduct(obj: { name: string, price: number, description: string, deal_id: string }) {
    try {
      const response = await this.http.post(this.addProductUrl, obj).toPromise();
      return response;
    } catch (err) {
      console.log(' ERR :::', err);
      return err;
    }
  }

  async saveDeal(obj: { name: string, description: string, discount_percentage: number }) {
    try {
      const response: any = await this.http.post(this.addDealtUrl, obj).toPromise();
      return response;
    } catch (err) {
      console.log(' ERR :::', err);
      return err;
    }
  }
}
