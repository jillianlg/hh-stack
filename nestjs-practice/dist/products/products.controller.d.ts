import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    create(product: CreateProductDTO): Promise<Product[]>;
    findByPattern(): string;
    findById(params: any): string;
    update(): string;
    delete(): string;
}
