import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import axios from 'axios';
import * as requestIp from 'request-ip';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('call')
  async call(@Body() data: { url_to_call: string }, @Req() req: any) {
    try {
      const response = await axios.get(data.url_to_call);
      const yourIp = requestIp.getClientIp(req);
      return {
        yourIp: yourIp,
        yourIp2: req.clientIp,
        yourIp3: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        data: response.data,
      };
    } catch (error) {
      console.error(error);
      return { error: error.message ?? 'An error occured' };
    }
  }
}
