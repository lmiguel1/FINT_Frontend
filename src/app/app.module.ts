import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './content/list/list.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CommunityComponent } from './community/community.component';
import { DescriptionComponent } from './content/description/description.component';
import { ContentComponent } from './content/content/content.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './account/helpers/auth.interceptor';
import { AccountComponent } from './account/account/account.component';
import { PaypalComponent } from './paypal/paypal.component';

//External
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    CommunityComponent,
    DescriptionComponent,
    ContentComponent,
    AccountComponent,
    PaypalComponent,
  ],
  imports: [
    BrowserModule,
    NgxPayPalModule,
    NgxSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
