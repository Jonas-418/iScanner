import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Promise<Storage> | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = this.storage.create();
  }

  public async set(key: string, value: any) {
    const storage = await this._storage;
    storage?.set(key, value);
  }

  public async get(key: string) {
    const storage = await this._storage;
    return this.storage?.get(key);
  }

  // public clearAll() {
  //   this._storage?.clear();
  // }

  // public async getKeys() {
  //   return await this._storage?.keys();
  // }

  // private async length() {
  //   return await this._storage?.length();
  // }
}