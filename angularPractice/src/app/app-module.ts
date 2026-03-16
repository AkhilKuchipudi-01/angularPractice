import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Todo } from './components/todo/todo';
import { Carroussel } from './components/carroussel/carroussel';
import { Debouncing } from './components/debouncing/debouncing';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast';
import { CommonModule } from '@angular/common';
import { Weather } from './components/weather/weather';


@NgModule({
  declarations: [
    App,
    Todo,
    Carroussel,
    Debouncing,
    ToastComponent,
    Weather,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
  ],
  bootstrap: [App]
})
export class AppModule { }
