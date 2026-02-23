import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('xyz')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getWelcome(): string {
    return this.appService.getWelcome();
  }
}
