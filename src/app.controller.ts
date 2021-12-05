import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  getNumber(): number{
    return this.appService.getNumber();
  }
  
  getArrays(): number[]{
    return this.appService.getArrays();
  }
  
  getEnums(): number{
    return this.appService.getEnums();
  }
  
  getMultitypeValues():number|string{
    return this.appService.getMultitypeValues();
  }
  
  getMultitupeArrays(): (number|string)[][]{
    return this.appService.getMultitypeArrays();
  }
  
}
