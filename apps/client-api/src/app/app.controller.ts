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
  async call(@Body() data: { url_to_call: string }) {
    try {
      const response = await axios.get(data.url_to_call);
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: error.message ?? 'An error occured' };
    }
  }
}
