import { Controller, Get, Query, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { Response as Resp } from 'express';
import { Custom } from './custom/custom.decorator';

@Controller('/api/teste')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  getHello(
    @Query('term') searchTerm: string,
    @Response() resp: Resp,
    @Custom('firstname') firstname: string,
  ) {
    // Do something with the search term, e.g., return search results
    resp.statusCode = 200;
    resp.json({
      message: `whiling for: ${searchTerm}`,
      details: firstname,
    });
  }
}
