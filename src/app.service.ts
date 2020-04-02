import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('AppService: getHello():');
    console.log('Printing Hello World!...');
    return 'Hello World!';
  }
}
