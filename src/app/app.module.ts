import { routes } from './app.routes';
import { TodolistModule } from './todolist/todolist.module';
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {LoginModule} from "./login/login.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports     : [
    BrowserModule, 
    TodolistModule, 
    LoginModule,
    RouterModule.forRoot(routes)
    ],
  bootstrap   : [AppComponent]
})

export class AppModule {


}