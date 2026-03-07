import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { Dashboard } from './components/dashboard/dashboard';
import { Practice } from './components/practice/practice';
import { Table } from './components/practice-components/table/table';
import { MobileResponsive } from './components/practice-components/mobile-responsive/mobile-responsive';
import { ThemeSwitchBtn } from './components/practice-components/theme-switch-btn/theme-switch-btn';

@NgModule({
  declarations: [
    App,
    Header,
    Sidebar,
    Dashboard,
    Practice,
    Table,
    MobileResponsive,
    ThemeSwitchBtn
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ToastModule,
    // ProgressBarModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
