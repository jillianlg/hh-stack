import { CreateProductDTO } from './dto/create-product.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    create(product: CreateProductDTO): any[];
    findByPattern(): string;
    findById(params: any): string;
    update(): string;
    delete(): string;
}
