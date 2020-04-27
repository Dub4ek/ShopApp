import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  config: Config = new Config();

  constructor() {
  }

  setConfig({ id, login, email }: { id: string, login: string, email: string }) {
    if (id) {
      this.config.id = id;
    }

    if (login) {
      this.config.login = login;
    }

    if (email) {
      this.config.email = email;
    }
  }

  getConfig() {
    return this.config;
  }
}

class Config {
  id?: string;
  login?: string;
  email?: string;

  constructor(id?: string, login?: string, email?: string) {
    this.id = id;
    this.login = login;
    this.email = email;
  }
}
