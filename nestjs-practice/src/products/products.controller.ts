/////// ***** Nest.js CRUD route practice ***** //////
import { Controller, Delete, Get, Param, Post, Put, Query, Redirect } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Post()
  create(): string {
    return 'New Product Action';
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

