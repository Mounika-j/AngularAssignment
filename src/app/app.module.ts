import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgOtpInputModule } from 'ng-otp-input';
// Import library module
import { NgxSpinnerModule, NgxSpinnerService  } from 'ngx-spinner';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToastrModule } from 'ngx-toastr';

import { MatDialogModule, MatFormFieldControl, MatFormFieldModule, MatSelectModule } from '@angular/material';

import { MatSelectFilterModule } from 'mat-select-filter';
import { UserRegistrationComponent } from './user-registration/user-resgistration.component';
import { BrowserModule } from '@angular/platform-browser';
import { BotDetectCaptchaModule } from 'angular-captcha';
import { NgxCaptchaModule } from 'ngx-captcha';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgOtpInputModule,
    ModalModule.forRoot(),
    NgxSpinnerModule,
    BsDropdownModule.forRoot(),
    MatSidenavModule,
    MatDialogModule,
    MatCheckboxModule,
    MatInputModule,
    ToastrModule.forRoot({maxOpened: 1}),
    MatSelectModule,
    MatFormFieldModule,
    NgxCaptchaModule
  ],
  exports: [ MatFormFieldModule, MatInputModule ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
