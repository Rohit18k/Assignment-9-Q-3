import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {
  transform(value: number, param: string): string {
    if (param === 'Prime') {
      return this.isPrime(value) ? 'It is Prime number' : 'It is not Prime';
    } else if (param === 'Perfect') {
      return this.isPerfect(value) ? 'It is Perfect number' : 'It is not Perfect';
    } else if (param === 'Even') {
      return this.isEven(value) ? 'It is Even' : 'It is not Even';
    } else if (param === 'Odd') {
      return this.isOdd(value) ? 'It is Odd' : 'It is not Odd';
    } else {
      return 'Invalid parameter';
    }
  }

  private isPrime(num: number): boolean {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  private isPerfect(num: number): boolean {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum === num;
  }

  private isEven(num: number): boolean {
    return num % 2 === 0;
  }

  private isOdd(num: number): boolean {
    return num % 2 !== 0;
  }
}
