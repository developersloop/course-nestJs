import { IUser } from '../types/user.type';
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
    return users.filter((user: IUser) => user.code == id);
  }

  store<T extends IUser>(user: T): Array<IUser> {
    users.push(user);
    return users;
  }
  update<T extends IUser>(id: string | number, args: T): Array<IUser> {
    return users
      .filter((user: IUser) => user.code == id)
      .map((user: IUser) => {
        return {
          code: args.code ?? user.code,
          name: args.name ?? user.name,
          email: args.email ?? user.email,
          password: args.password ?? user.password,
        };
      });
  }
  delete(id: string | number): Array<IUser> {
    return users.filter((user: IUser) => user.code !== id);
  }
}
