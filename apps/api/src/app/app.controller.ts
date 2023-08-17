import { Controller, Get, Req } from '@nestjs/common';

import { AppService } from './app.service';
import * as requestIp from 'request-ip';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(@Req() req: any) {
    const yourIp = requestIp.getClientIp(req);
    console.log({
      yourIp: yourIp,
      yourIp2: req.clientIp,
      yourIp3: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    });
    return {
      yourIp: yourIp,
      yourIp2: req.clientIp,
      yourIp3: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      data: this.appService.getData(),
    };
  }
}
