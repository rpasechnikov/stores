import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterHistoryComponent } from './components/counter-history/counter-history.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, CounterComponent, CounterHistoryComponent],
  imports: [BrowserModule, AppRoutingModule, AkitaNgDevtools.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
