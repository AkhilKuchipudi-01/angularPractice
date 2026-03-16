import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Todo } from './components/todo/todo';
import { Debouncing } from './components/debouncing/debouncing';
import { Carroussel } from './components/carroussel/carroussel';
import { Weather } from './components/weather/weather';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todo', component: Todo },
  { path: 'debouncing', component: Debouncing },
  { path: 'carousel', component: Carroussel },
  { path: 'weather', component: Weather }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
