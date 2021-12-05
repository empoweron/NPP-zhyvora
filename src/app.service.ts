import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
let a, b: number;
a = Math.floor(Math.random() * 100);  
b = Math.floor(Math.random() * 100);  

const res = this.isPairedNumber(a+b);
return`${res}`;
  }

  isPairedNumber(number): boolean {
    return !Boolean(number % 2);
  }
    
}

