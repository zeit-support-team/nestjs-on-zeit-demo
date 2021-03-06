import { Controller, Get, Post, Logger, Param, Body, Req, Request, HttpService, HttpException, Put } from '@nestjs/common';
// import { catchError, tap, map } from 'rxjs/operators';
import { AppService } from './app.service';
import { resolve } from 'dns';
// import { resolve } from 'dns';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private httpService: HttpService) {}

  @Get()
  getHello(): string {
    console.log('GET @ /');
    return this.appService.getHello();
  }

  @Post('method_1')
   async method_1(@Body() data: any, @Req() request: Request): Promise<any> {
    console.log('POST @ /method_1');

    // the rest does not work in v2
    // this.httpService.put('https://webhook.site/03ec0f5c-603e-4fcd-b5d7-e2281d22a324',
    //   data,
    //   { headers: this.appService.getHeaders() }
    // ).pipe(
    //   catchError(e => {
    //     Logger.log(this.appService.getStatus('[POST] /subscribe, error', e.response));
    //     Logger.log(e);
    //     throw new HttpException(e.response.statusText, e.response.status);
    //   })).subscribe((x) => {
    //     Logger.log(this.appService.getStatus('[POST] /subscribe, success', x));
    // })

    const apiData = await new Promise((resolve, reject) => {

      this.httpService.get('https://cat-fact.herokuapp.com/facts').subscribe((response)=>{
        return resolve(response.data);
      });
    });
    console.log('apiData', apiData);


    return apiData;
  }
}
