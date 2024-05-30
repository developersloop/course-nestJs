import { Body, Controller, Get, Post } from '@nestjs/common';
import { Services } from 'src/services/services';
import { UsersService } from 'src/users/users.service';

@Controller('/api/products')
export class ProductsController {
  constructor(
    private readonly service: UsersService,
    private readonly services: Services,
  ) {}

  @Get('')
  getProducts(): Array<string> {
    console.log(this);
    return this.service.getInsurancePlan();
  }

  @Get('/cep')
  getCep(): string {
    return this.services.getCep();
  }

  @Post()
  async storeProduct(@Body() body) {
    return body;
  }
}
