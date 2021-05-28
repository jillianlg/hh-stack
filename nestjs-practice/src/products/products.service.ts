import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  products = [];
  //database logic
  create(product) {
    this.products.push(product)
    return this.products;
  }
}