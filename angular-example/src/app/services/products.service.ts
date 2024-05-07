import { Injectable } from '@angular/core';
import { Product, products } from '../data';
import { Filterbox } from '@filterbox/v1';

// declare select data type
interface SelectData {
  label: string;
  options: string[];
}

const selectCategoryData: SelectData = {
  label: 'select category',
  options: ['Animal', 'Fruit', 'Drink'],
};

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products = products;

  private filterbox = new Filterbox([
    // select category filter
    {
      key: 'category',
      control: {
        type: 'select',
        data: selectCategoryData,
      },
      match(item: Product, ctx) {
        const selected = ctx.getFilterValue('category');
        if (selected.isNotSet()) return true; // match if nothing selected
        return selected.toString() === item.category;
      },
    },
  ]);

  controls = this.filterbox.controls.value();
  queryString = '';
  payload = '';

  constructor() {
    this.filterbox.query.subscribe((q) => {
      this.queryString = q.string();
      this.payload = JSON.stringify(q.object());
    });

    this.filterbox.controls.subscribe((update) => {
      this.controls = update;
    });

    this.filterbox.match(products).subscribe((update) => {
      this.products = update;
    });
  }
}
