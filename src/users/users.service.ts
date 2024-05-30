import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getInsurancePlan(): Array<string> {
    return ['plan1', 'plan2', 'plan3'];
  }
}
