import { Storage } from './../utils/storage';
import { Item } from './item';
import { Injectable } from '@angular/core';

@Injectable()
export class Todolist {

    public items: Item[];
    private storage: Storage;
    
    constructor(storage: Storage) {
        this.items = <Item[]>storage.get('LIST') || [];    
        this.storage = storage;
    }

    public addItem(title: string): void {
        this.items.push({
            title:title,
            done: false,
            created: new Date()
        });
        this.storage.save('LIST', this.items);
    }

    public removeItem(item:Item): void {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);          
        this.storage.save('LIST', this.items);           
    }

} 