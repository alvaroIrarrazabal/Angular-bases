import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/hero.module';
import { DbzModule } from './dbz/dbz.module';


import { AppComponent } from './app.component';
import { MainPagesComponent } from './dbz/pages/main-pages.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    DbzModule,
    AppRoutingModule,
    CounterModule,
    FormsModule,
    HeroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
