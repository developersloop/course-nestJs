import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Response,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Services } from '../services/services';
import { IUser } from '../types/user.type';
import { UserDto } from 'src/dto/users/users.dto';

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
    id: number,
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
  @Post()
  async storeUser(@Response() response, @Body() body: UserDto): Promise<IUser> {
    return response.status(HttpStatus.CREATED).json(this.services.store(body));
  }
  @Put(':id')
  async updateUser(
    @Response() response,
    @Body() body: IUser,
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): Promise<IUser> {
    try {
      return response
        .status(HttpStatus.OK)
        .json(this.services.update(id, body));
    } catch (error) {
      console.log(error);
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
  @Delete(':id')
  async deleteUser(
    @Response() response,
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): Promise<void> {
    return response
      .status(HttpStatus.NO_CONTENT)
      .json(this.services.delete(id));
  }
}
