import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useFactory: GeneratorFactory,
})
export class GeneratorService {

  constructor() { }
}

export function GeneratorFactory(n: number): string {
  const asciiValues: Array<number> = new Array(122).map((item, i) => {
    if ((i >= 48 && i <= 57) || (i >= 65 && i <= 90) || (i >= 97 && i <= 122) ) {
      return i;
    }
    return -1;
  }).filter(item => item >= 0);
  const randomSelector = Math.floor(Math.random() * asciiValues.length);

  return String.fromCharCode.apply(null, new Array(n).map(_ => asciiValues[randomSelector]));
}
