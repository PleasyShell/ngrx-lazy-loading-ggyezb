import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RootComponent } from './root.component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
    //StoreDevtoolsModule.instrument({}),
  ],
  declarations: [AppComponent, RootComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
