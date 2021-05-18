import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestOneComponent } from './rest-one/rest-one.component';
import { FooterComponent } from './footer/footer.component';
import { RestTwoComponent } from './rest-two/rest-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestOneComponent,
    FooterComponent,
    RestTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
