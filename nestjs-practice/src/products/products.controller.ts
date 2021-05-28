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

  @Get()
  async findAll(@Param() params): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findById(@Param() params): Promise<Product> {
    return this.productService.findById(params.id);
  }

  @Delete(':id')
  async delete(@Param() params): Promise<Product[]> {
    return this.productService.delete(params.id);
  }

}

