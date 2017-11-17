import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { CharactersComponent } from './components/characters/characters.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
        {
          path:'detail', component: DetailComponent
        }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
