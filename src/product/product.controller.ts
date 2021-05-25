import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('product')
export class ProductController {
  @Get()
  findAll(
    @Req()
    request: Request,
    @Res()
    response: Response,
  ): any {
    console.log(request);

    return response.json({ msg: 'Find ALL' });
  }
}
