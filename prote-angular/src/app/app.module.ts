import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
