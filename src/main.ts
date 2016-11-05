import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { Main } from './app/containers'
import { AppBar } from './app/ui';
import { App } from './app'

@NgModule({
  declarations: [
    App,
    Main,
    AppBar
  ],
  imports: [BrowserModule],
  bootstrap: [App]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
