import { Controller, Delete, Get, Header, HttpCode, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('product')
export class ProductController {
  @Post()
  // create(): string {
  //   return 'NEW PRODUCT END POINT';
  // }

  @HttpCode(204)
  @Header('Authorization', 'Bearer XADSASDASD##$#$')
  create(): string {
    return 'New Product Action';
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

  @Get('ab*cd')
  findByPattern(): string {
    return 'Find by pattern';
  }

  @Get(':id')
  findById(): string {
    return 'Find by id';
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
