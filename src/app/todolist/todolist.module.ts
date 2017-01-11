import { UtilsModule } from './../utils/utils.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import { TdHeaderComponent } from './td-header/td-header.component';
import { TdListComponent } from './td-list/td-list.component';
import { TdFooterComponent } from './td-footer/td-footer.component';
import { TdItemsComponent } from './td-items/td-items.component';
import { TdItemComponent } from './td-item/td-item.component';
import { TdInputComponent } from './td-input/td-input.component';
import { TdCounterComponent } from './td-counter/td-counter.component';
import { TdToggleComponent } from './td-toggle/td-toggle.component';
import { Todolist } from './todolist';
import { HttpModule } from '@angular/http';

@NgModule({
  imports     : [CommonModule, UtilsModule, HttpModule],
  providers   : [Todolist],
  declarations: [TodolistComponent, TdHeaderComponent, TdListComponent, TdFooterComponent, TdItemsComponent, TdItemComponent, TdInputComponent, TdCounterComponent, TdToggleComponent],
  exports     : [TodolistComponent]
})
export class TodolistModule {

}
