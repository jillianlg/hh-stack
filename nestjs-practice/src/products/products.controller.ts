/////// ***** Nest.js CRUD route practice ***** //////
import { Controller, Delete, Get, Param, Post, Put, Query, Redirect } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(
    private productService: ProductsService) {}

  @Post()
  create() {
    return this.productService.create({
      id: '1',
      name: 'Macbook Pro',
      qty: '1',
      price: '1000'
    });
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

