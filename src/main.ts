import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { Main } from './app/containers/main';
import { App } from './app';

@NgModule({
  declarations: [Main, App],
  imports: [BrowserModule],
  bootstrap: [App]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
