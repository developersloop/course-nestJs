import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Custom = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    //const user = request.user;

    console.log(request);
    return data;
  },
);
