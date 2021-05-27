import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { FooterComponent } from './footer/footer.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { BooksComponent } from './books/books.component';
import { TelivisionsComponent } from './telivisions/telivisions.component';
import { SearchPipe } from './search.pipe';
import { TvSearchPipe } from './tv-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    ProductsComponent,
    UsersComponent,
    FooterComponent,
    UserdetailsComponent,
    PagenotfoundComponent,
    MobilesComponent,
    BooksComponent,
    TelivisionsComponent,
    SearchPipe,
    TvSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
