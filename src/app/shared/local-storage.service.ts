import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private localStorage: Storage;
  constructor() {
    this.localStorage = window.localStorage;
  }

  setItem(key: string, value: string | object) {
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): string {
    const result: string | null = this.localStorage.getItem(key);

    return result ?? '';
  }

  removeItem(key: string) {
    this.localStorage.removeItem(key);
  }
}
