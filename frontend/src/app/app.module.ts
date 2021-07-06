import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
// import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AppComponent } from './app.component';
// import { CartComponent } from './cart/cart.component';
import {LogoutComponent} from './shared/login/logout.component';
import { AppRoutingModule } from './app-routing.module';
import {SharedInterceptor} from './shared/shared.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    // CartComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // MatProgressBarModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: SharedInterceptor, multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


