import { SetMetadata } from '@nestjs/common';

export const Dec = (...args: string[]) => SetMetadata('dec', args);
