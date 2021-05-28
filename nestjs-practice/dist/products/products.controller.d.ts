import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    create(product: CreateProductDTO): Promise<Product[]>;
    findAll(params: any): Promise<Product[]>;
    findById(params: any): Promise<Product>;
    delete(params: any): Promise<Product[]>;
}
