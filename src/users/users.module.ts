import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Services } from 'src/services/services';

@Module({
  controllers: [UsersController],
  providers: [UsersService, Services],
  exports: [UsersService, Services],
})
export class UsersModule {}
