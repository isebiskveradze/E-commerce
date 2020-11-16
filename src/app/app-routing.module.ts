import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { MobilePhonesComponent } from './mobile-phones/mobile-phones.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    //ავტომატურად შევიდეს ჰომზე
    path: '',
    redirectTo:'home',
    pathMatch: 'full'

  },
  // {
  //   path: '',
  //   component: HomeComponent,
  //   pathMatch: 'full'
  // },
  {
    path: 'home',
    component: HomeComponent,
    
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'login',
    component: LogInComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'mobilePhones',
    component: MobilePhonesComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
