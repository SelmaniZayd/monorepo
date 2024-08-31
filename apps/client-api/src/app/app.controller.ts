import { Body, Controller, Get, Post } from '@nestjs/common';

import axios from 'axios';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('call')
  async call(@Body() data: {url_to_call: string}) {
    return axios.get(data.url_to_call).catch((error) => {
      console.error(error);
    });
  }
}
