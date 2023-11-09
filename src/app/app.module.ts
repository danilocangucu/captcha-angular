import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { ResultComponent } from './result/result.component';

import { NgHcaptchaModule } from 'ng-hcaptcha';
import { RecaptchaModule } from 'ng-recaptcha';

import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaptchaComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgHcaptchaModule.forRoot({
      siteKey: 'faf6905d-c3d6-4694-a69f-726b6b0e8f78',
      languageCode: 'en',
    }),
    RecaptchaModule,
    MatProgressBarModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
