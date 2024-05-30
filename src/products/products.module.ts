import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [ProductsController],
})
export class ProductsModule {}
