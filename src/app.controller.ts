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
export class Programmer{
name: string;
age: number;
languages: string[];
yearsOfExp:number;

constructor(name, age, languages,yearsOfExp){
this.name=name;
this.languages=languages;
this.age=age;
this.yearsOfExp=yearsOfExp;
}

toString():string{
return `
Hi, my name is ${this.name}, i am a programmer.<br/>
My age is ${this.age}.<br/>
I am working in IT during ${this.yearsOfExp}.<br/>
I know such languages as ${this.languages.join(',')}.
`;
}

}
