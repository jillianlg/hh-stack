/////// ***** Nest.js CRUD route practice ***** //////
import { Body, Controller, Delete, Get, Param, Post, Put, Query, Redirect } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(
    private productService: ProductsService) {}

  @Post()
  async create(
    @Body() product : CreateProductDTO) : Promise<Product[]> {
    return this.productService.create(product);
  }

  @Get('ab*cd')
  findByPattern(): string {
    return 'Find by pattern';
  }

  @Get(':id')
  findById(@Param() params): string {
    return params;
  }

  @Put()
  update(): string {
    return 'Update All';
  }

  @Delete()
  delete(): string {
    return 'Delete All';
  }
}

