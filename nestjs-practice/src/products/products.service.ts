import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  products: Product[] = [];
  //database logic
  create(product: Product) {
    this.products.push(product)
    return this.products;
  }

  findAll(): Product[] {
    return this.products;
  }

  findById(id: string): Product {
    return this.products.find(p => p.id === id);
  }
}