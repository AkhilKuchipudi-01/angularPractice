import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Todo } from './components/todo/todo';
import { Carroussel } from './components/carroussel/carroussel';
import { Debouncing } from './components/debouncing/debouncing';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    App,
    Todo,
    Carroussel,
    Debouncing,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
