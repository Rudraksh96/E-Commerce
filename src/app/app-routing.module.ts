import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcartComponent } from './addcart/addcart.component';
import { AuthGuard } from './auth/auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SignupComponent } from './signup/signup.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [
  {
path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"home",canActivate:[AuthGuard],component:HomeComponent
  },
  {
    path:"details/:productId",canActivate:[AuthGuard],component:ProductDetailComponent
  },
  {
    path:"contactUs",canActivate:[AuthGuard],component:ContactUsComponent
  },
  
  {
    path:"testimonial",canActivate:[AuthGuard],component:TestimonialComponent
  },
  {
    path:"addtocart",canActivate:[AuthGuard],component:AddcartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
