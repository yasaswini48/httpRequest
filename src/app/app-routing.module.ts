import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { BooksComponent } from './books/books.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TelivisionsComponent } from './telivisions/telivisions.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = 
[
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'products',component:ProductsComponent,children:[
     {path:'mobiles',component:MobilesComponent},
     {path:'books',component:BooksComponent},
     {path:'tvs',component:TelivisionsComponent},
     {path:'',redirectTo:'/products/mobiles',pathMatch:'full'}
  ]},
  {path:'users',component:UsersComponent},
  //navigate by taking user id
  {path:'users/:id',component:UserdetailsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
