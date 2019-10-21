import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterHistoryComponent } from './components/counter-history/counter-history.component';
import { counterReducer } from './reducers';

@NgModule({
  declarations: [AppComponent, CounterComponent, CounterHistoryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Registers global providers needed to access counterReducer throughout the application
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
