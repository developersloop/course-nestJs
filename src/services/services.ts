import { IUser } from './../../dist/types/user.d';
import { Injectable } from '@nestjs/common';

const users: Array<IUser> = [
  {
    code: '1',
    name: 'Vitor Vicente',
    email: 'admin@lyncas.com',
    password: Math.random().toFixed(10),
  },
  {
    code: '2',
    name: 'Chloe Isabelle',
    email: 'chloe@lyncas.net',
    password: Math.random().toFixed(10),
  },
  {
    code: '3',
    name: 'Regia Mikaelle',
    email: 'regia@lyncas.net',
    password: Math.random().toFixed(10),
  },
];

@Injectable()
export class Services {
  getCep(): string {
    return '38405303';
  }

  getUsers(): Array<IUser> {
    return users;
  }

  findUser(id: string | number): Array<IUser> {
    return users.find((user: IUser) => user.code === id);
  }
}
