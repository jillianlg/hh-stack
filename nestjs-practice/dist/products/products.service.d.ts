import { Product } from './interfaces/product.interface';
export declare class ProductsService {
    products: Product[];
    create(product: Product): Product[];
    findAll(): Product[];
    findById(id: string): Product;
}
