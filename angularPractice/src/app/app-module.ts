import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ProgressBarModule } from 'primeng/progressbar';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Todo } from './components/todo/todo';
import { Carroussel } from './components/carroussel/carroussel';
import { Debouncing } from './components/debouncing/debouncing';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast';
import { CommonModule } from '@angular/common';
import { Weather } from './components/weather/weather';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SimpleWeather } from './components/simple-weather/simple-weather';


@NgModule({
  declarations: [
    App,
    Todo,
    Carroussel,
    Debouncing,
    ToastComponent,
    Weather,
    SimpleWeather,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    MessageService

  ],
  bootstrap: [App]
})
export class AppModule { }
