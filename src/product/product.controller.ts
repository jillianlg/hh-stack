import { Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('product')
export class ProductController {
  @Post()
  create(): string {
    return 'NEW PRODUCT END POINT';
  }
  @Get()
  findAll(
    @Req()
    request: Request,
    @Res()
    response: Response,
    @Query() query,
  ): any {
    console.log(query);

    return response.json({ msg: 'Find ALL' });
  }
}
