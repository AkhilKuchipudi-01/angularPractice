import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Practice } from './components/practice/practice';
import { Table } from './components/practice-components/table/table';
import { MobileResponsive } from './components/practice-components/mobile-responsive/mobile-responsive';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  {
    path: 'practice', component: Practice, children: [
      { path: '', redirectTo: 'table', pathMatch: 'full' },
      { path: 'table', component: Table },
      { path: 'mobile-responsive', component: MobileResponsive }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
