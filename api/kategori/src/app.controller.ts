import { Controller, Get } from '@nestjs/common';
@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Selamat Datang, Kembali';
  }

  @Get('xyz')
  getHelloXyz(): string {
    return 'Selamat Datang, Kembali';
  }
}
