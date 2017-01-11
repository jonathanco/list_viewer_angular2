import { Injectable } from '@angular/core';

@Injectable()
export class Storage {

    public save(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public get(key: string):Object {
        return JSON.parse(localStorage.getItem(key));
    }

}