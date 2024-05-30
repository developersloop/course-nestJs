import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Response,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Services } from '../services/services';
import { IUser } from 'dist/types/user';

@Controller('/api/users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly services: Services,
  ) {}

  @Get('/')
  async users(@Response() response): Promise<Array<IUser>> {
    return response.status(200).json(this.services.getUsers());
  }
  @Get(':id')
  async findUser(
    @Response() response,
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    { id }: { id: number },
  ): Promise<Array<IUser>> {
    try {
      return response.status(200).json(this.services.findUser(id));
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Contate o administrador do sistema.',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }
}
