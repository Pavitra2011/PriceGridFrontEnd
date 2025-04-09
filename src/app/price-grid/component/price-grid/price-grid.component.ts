import { Component, OnInit } from '@angular/core';
import { PriceGrid } from '../../model/price-grid.model';
import { PriceGridService } from '../../services/price-grid.service';

@Component({
  selector: 'app-price-grid',
  templateUrl: './price-grid.component.html',
  styleUrl: './price-grid.component.scss'
})
export class PriceGridComponent implements OnInit {

  priceGridList: PriceGrid[] = [];
  priceGrid: PriceGrid = { height: 0, width: 0, price: 0 };
  uniqueHeights: number[] = [];
uniqueWidths: number[] = [];
  constructor(private priceGridService: PriceGridService) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.priceGridService.getAll().subscribe(data => {
      this.priceGridList = data;
      this.uniqueHeights = [...new Set(data.map(item => item.height))];
    this.uniqueWidths = [...new Set(data.map(item => item.width))];
  });
   
  }

  save() {
    this.priceGridService.create(this.priceGrid).subscribe(() => {
      alert('Data Saved Successfully');
      this.loadAll();
      this.priceGrid = { height: 0, width: 0, price: 0 };
    });
  }

  getPrice(height: number, width: number): number | string {
    const found = this.priceGridList.find(item => item.height === height && item.width === width);
    return found ? found.price : '-';
  }
}