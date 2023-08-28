import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent {
  title = 'Deals Listing!';
  deals: any;
  constructor(private dataService: DataService) {
  }
  async ngOnInit(): Promise<any> {
    const result: any = await this.dataService.fetchDeals();
    this.deals = result?.deals;
  }

}
