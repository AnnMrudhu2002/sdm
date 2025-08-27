import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app';
import { AppRoutingModule } from './app-routing-module';
import { AuthModule } from './auth/auth-module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Dashboard } from './dashboard/dashboard';
import { AuthInterceptor } from './auth-interceptor';

@NgModule({
  declarations: [AppComponent, Dashboard],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    BrowserAnimationsModule,    // required for toastr
    ToastrModule.forRoot({      // toastr config
      positionClass: 'toast-top-right',
      timeOut: 3000,
      progressBar: true,
      closeButton: true
    })
  ],
  providers: [provideBrowserGlobalErrorListeners(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
