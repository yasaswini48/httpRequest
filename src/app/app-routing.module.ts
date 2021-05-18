import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestOneComponent} from './rest-one/rest-one.component'
import { RestTwoComponent } from './rest-two/rest-two.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'RestOne',component:RestOneComponent},
  {path:'RestTwo',component:RestTwoComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
