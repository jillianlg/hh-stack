import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('product')
export class ProductController {
  @Get()
  findAll(
    @Req()
    request: Request,
  ): string {
    console.log(request);

    return 'Find ALL';
  }
}
