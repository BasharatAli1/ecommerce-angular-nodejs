import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Admin Dashboard';
  productInputObj = {
    "name": '',
    "description": '',
    "price": 0,
    "stock": 0,
    "deal_id": ''
  };
  dealInputObj = {
    "name": '',
    "description": '',
    "discount_percentage": 0,
  };
  products: any;
  deals = [ { name: "", description: "", discount_percentage: 0 } ];
  selectedDeal = {
    "_id": "",
    "name": "",
    "description": "",
  };
  productFormData = {
    name: '',
    price: null,
    description: '',
    stock: 1,
    selectedDeal: null
  };
  dealFormData = {
    name: '',
    description: '',
    percentage: 0,
  };

  constructor(private dataService: DataService) {
  }
  async ngOnInit(): Promise<any> {
    const dealsResult = await this.dataService.fetchDeals();
    this.deals = dealsResult?.deals;
    const productsResult = await this.dataService.fetchProducts();
    this.products = productsResult?.products;
  }

  async transferProduct(name: string, price: number, description: string, stock: number, deal: any) {
    this.productInputObj={
      "name": name,
      "price": price,
      "description": description,
      "stock": stock,
      "deal_id": deal._id
    };
    
    this.dataService.saveProduct(this.productInputObj);
    this.productFormData = {
      name: '',
      price: null,
      description: '',
      stock: 1,
      selectedDeal: null
    };
  }

  async transferDeal(name: string, description: string, discount_percentage: number) {
    this.dealInputObj={
      "name": name,
      "description": description,
      "discount_percentage": discount_percentage,
    };

    const response = await this.dataService.saveDeal(this.dealInputObj);

    // update deals
    this.deals.push(response.deal);

    this.dealFormData = {
      name: '',
      description: '',
      percentage: 0,
    };
  }
}
