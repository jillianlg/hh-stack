/////// ***** Nest.js CRUD route practice ***** //////
import { Controller, Delete, Get, Header, HttpCode, Param, Post, Put, Query, Redirect } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Post()
  @HttpCode(204)
  @Header('Authorization', 'Bearer XADSASDASD##$#$ASDSASDAA')
  create(): string {
    return 'New Product Action';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '6') {
      return { url: 'https://docs.nestjs.com/v6/' };
    }
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

