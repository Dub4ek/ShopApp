import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useValue: {
    App: 'Task Manager',
    Ver: "1.0",
  }
})
export class ConstantService {
  constructor() { }
}
