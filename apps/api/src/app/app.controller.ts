import { Controller, Get, Req } from '@nestjs/common';

import { AppService } from './app.service';
import * as requestIp from 'request-ip';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(@Req() req) {
    const yourIp = requestIp.getClientIp(req);
    return {
      yourIp: yourIp,
      yourIp2: req.clientIp,
      data: this.appService.getData(),
    };
  }
}
