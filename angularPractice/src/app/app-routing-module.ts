import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Todo } from './components/todo/todo';
import { Debouncing } from './components/debouncing/debouncing';
import { Carroussel } from './components/carroussel/carroussel';
import { Weather } from './components/weather/weather';
import { SimpleWeather } from './components/simple-weather/simple-weather';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todo', component: Todo },
  { path: 'debouncing', component: Debouncing },
  { path: 'carousel', component: Carroussel },
  { path: 'weather', component: Weather },
  { path: 'simple-weather', component: SimpleWeather },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
