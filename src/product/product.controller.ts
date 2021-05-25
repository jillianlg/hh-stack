import { Controller } from '@nestjs/common';

@Controller('product')
export class ProductController {
  findAll(): string {
    return 'Find ALL';
  }
}
